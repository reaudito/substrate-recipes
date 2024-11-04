# Cache Multiple Calls

`pallets/storage-cache`
<a target="_blank" href="https://github.com/reaudito/substrate-recipes/blob/main/polkadot-sdk-solochain-template/pallets/storage-cache/src/lib.rs">
	<img src="https://img.shields.io/badge/Github-View%20Code-brightgreen?logo=github" alt ="View on GitHub"/>
</a>

Calls to runtime storage have an associated cost and developers should strive to minimize the number
of calls.

```rust, ignore
#[pallet::storage]
#[pallet::getter(fn some_copy_value)]
pub(super) type SomeCopyValue<T: Config> = StorageValue<_, u32>;

#[pallet::storage]
#[pallet::getter(fn king_member)]
pub(super) type KingMember<T: Config> = StorageValue<_, T::AccountId>;

#[pallet::storage]
#[pallet::getter(fn group_members)]
pub(super) type GroupMembers<T: Config> = StorageValue<_, Vec<T::AccountId>>;

```

## Copy Types

For [`Copy`](https://doc.rust-lang.org/std/marker/trait.Copy.html) types, it is easy to reuse
previous storage calls by simply reusing the value, which is automatically cloned upon reuse. In the
code below, the second call is unnecessary:

```rust, ignore
pub fn increase_value_no_cache(
    origin: OriginFor<T>,
    some_val: u32,
) -> DispatchResultWithPostInfo {
    let _ = ensure_signed(origin)?;
    let original_call = <SomeCopyValue<T>>::get();
    let some_calculation = original_call
        .unwrap()
        .checked_add(some_val)
        .ok_or("addition overflowed1")?;
    // this next storage call is unnecessary and is wasteful
    let unnecessary_call = <SomeCopyValue<T>>::get();
    // should've just used `original_call` here because u32 is copy
    let another_calculation = some_calculation
        .checked_add(unnecessary_call.unwrap())
        .ok_or("addition overflowed2")?;
    <SomeCopyValue<T>>::put(another_calculation);
    let now = <frame_system::Pallet<T>>::block_number();
    Self::deposit_event(Event::InefficientValueChange(another_calculation, now));
    Ok(().into())
}
```

Instead, the initial call value should be reused. In this example, the `SomeCopyValue` value is
[`Copy`](https://doc.rust-lang.org/std/marker/trait.Copy.html) so we should prefer the following
code without the unnecessary second call to storage:

```rust, ignore
pub fn increase_value_w_copy(
    origin: OriginFor<T>,
    some_val: u32,
) -> DispatchResultWithPostInfo {
    let _ = ensure_signed(origin)?;
    let original_call = <SomeCopyValue<T>>::get();
    let some_calculation = original_call
        .unwrap()
        .checked_add(some_val)
        .ok_or("addition overflowed1")?;
    // uses the original_call because u32 is copy
    let another_calculation = some_calculation
        .checked_add(original_call.unwrap())
        .ok_or("addition overflowed2")?;
    <SomeCopyValue<T>>::put(another_calculation);
    let now = <frame_system::Pallet<T>>::block_number();
    Self::deposit_event(Event::BetterValueChange(another_calculation, now));
    Ok(().into())
}
```

## Clone Types

If the type was not `Copy`, but was [`Clone`](https://doc.rust-lang.org/std/clone/trait.Clone.html),
then it is still better to clone the value in the method than to make another call to runtime
storage.

The runtime methods enable the calling account to swap the `T::AccountId` value in storage if

1. the existing storage value is not in `GroupMembers` AND
2. the calling account is in `GroupMembers`

The first implementation makes a second unnecessary call to runtime storage instead of cloning the
call for `existing_key`:

```rust, ignore
pub fn swap_king_no_cache(origin: OriginFor<T>) -> DispatchResultWithPostInfo {
    let new_king = ensure_signed(origin)?;
    let existing_king = <KingMember<T>>::get();

    // only places a new account if
    // (1) the existing account is not a member &&
    // (2) the new account is a member
    ensure!(
        !Self::is_member(&existing_king.unwrap()),
        "current king is a member so maintains priority"
    );
    ensure!(
        Self::is_member(&new_king),
        "new king is not a member so doesn't get priority"
    );

    // BAD (unnecessary) storage call
    let old_king = <KingMember<T>>::get();
    // place new king
    <KingMember<T>>::put(new_king.clone());

    Self::deposit_event(Event::InefficientKingSwap(old_king.unwrap(), new_king));
    Ok(().into())
}
```

If the `existing_key` is used without a `clone` in the event emission instead of `old_king`, then
the compiler returns the following error:

```bash
error[E0382]: use of moved value: `new_king`
   --> pallets/storage-cache/src/lib.rs:190:79
    |
168 |             let new_king = ensure_signed(origin)?;
    |                 -------- move occurs because `new_king` has type `<T as frame_system::Config>::AccountId`, which does not implement the `Copy` trait
...
188 |             <KingMember<T>>::put(new_king);
    |                                  -------- value moved here
189 |
190 |             Self::deposit_event(Event::InefficientKingSwap(old_king.unwrap(), new_king));
    |                                                                               ^^^^^^^^ value used here after move
    |
help: consider cloning the value if the performance cost is acceptable
    |
188 |             <KingMember<T>>::put(new_king.clone());
    |                                          ++++++++

For more information about this error, try `rustc --explain E0382`.
error: could not compile `pallet-storage-cache` (lib) due to 1 previous error
```

Fixing this only requires cloning the original value before it is moved:

```rust, ignore
pub fn swap_king_with_cache(origin: OriginFor<T>) -> DispatchResultWithPostInfo {
    let new_king = ensure_signed(origin)?;
    let existing_king = <KingMember<T>>::get();
    // prefer to clone previous call rather than repeat call unnecessarily
    let old_king = existing_king.clone();

    // only places a new account if
    // (1) the existing account is not a member &&
    // (2) the new account is a member
    ensure!(
        !Self::is_member(&existing_king.unwrap()),
        "current king is a member so maintains priority"
    );
    ensure!(
        Self::is_member(&new_king),
        "new king is not a member so doesn't get priority"
    );

    // <no (unnecessary) storage call here>
    // place new king
    <KingMember<T>>::put(new_king.clone());

    Self::deposit_event(Event::BetterKingSwap(old_king.unwrap(), new_king));
    Ok(().into())
}
```

Not all types implement [`Copy`](https://doc.rust-lang.org/std/marker/trait.Copy.html) or
[`Clone`](https://doc.rust-lang.org/std/clone/trait.Clone.html), so it is important to discern other
patterns that minimize and alleviate the cost of calls to storage.


## Quiz
{{#quiz cache.toml}}
