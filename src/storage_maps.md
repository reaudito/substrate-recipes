# Declaring a `StorageMap`

`pallets/simple-map`
<a target="_blank" href="https://github.com/reaudito/substrate-recipes/blob/main/polkadot-sdk-solochain-template/pallets/simple-map/src/lib.rs">
	<img src="https://img.shields.io/badge/Github-View%20Code-brightgreen?logo=github" alt ="View on GitHub"/>
</a>

We declare a single storage map with the following syntax:

```rust
#[pallet::storage]
#[pallet::getter(fn simple_map)]
pub(super) type SimpleMap<T: Config> =
    StorageMap<_, Blake2_128Concat, T::AccountId, u32, ValueQuery>;

```

Explanation of the code:

- `SimpleMap` - the name of the storage map

- `#[pallet::getter(fn simple_map)]` - a getter function `simple_map` is created using pallet getter macros.

- `Blake2_128Concat` - its an hasher used in map. More on this below.

Map contains key and its value:

- `T::AccountId` - its the data type of key of the map.

- `u64` - its the data type of value of the map.

- `ValueQuery` - If you omit ValueQuery, when interacting with a simple map, you will get an Option<u32>, which means that if you try to get a value from your StorageMap, you will get either Some(value) or None. Using ValueQuery will always return a value, so you don't have to deal with unwrapping the get calls.


## Choosing a Hasher
[Hasher to use to hash keys to insert to storage.](https://paritytech.github.io/polkadot-sdk/master/frame_support/trait.StorageHasher.html)

Although the syntax above is complex, most of it should be straightforward if you've understood the
recipe on storage values. The last unfamiliar piece of writing a storage map is choosing which
hasher to use. In general you should choose one of the three following hashers. The choice of hasher
will affect the performance and security of your chain. If you don't want to think much about this,
just choose `Blake2_128Concat` and skip to the next section.

### `Blake2_128Concat`

This is a cryptographically secure hash function, and is always safe to use. It is reasonably
efficient, and will keep your storage tree balanced. You _must_ choose this hasher if users of your
chain have the ability to affect the storage keys. In this pallet, the keys are `AccountId`s. At
first it may _seem_ that the user doesn't affect the `AccountId`, but in reality a malicious user
can generate thousands of accounts and use the one that will affect the chain's storage tree in the
way the attacker likes. For this reason, we have chosen to use the `Blake2_128Concat` hasher.

### `Twox64Concat`

This hasher is _not_ cryptographically secure, but is more efficient than blake2. Thus it represents
trading security for performance. You should _not_ use this hasher if chain users can affect the
storage keys. However, it is perfectly safe to use this hasher to gain performance in scenarios
where the users do not control the keys. For example, if the keys in your map are sequentially
increasing indices and users cannot cause the indices to rapidly increase, then this is a perfectly
reasonable choice.

### `Identity`

The `Identity` "hasher" is really not a hasher at all, but merely an
[identity function](https://en.wikipedia.org/wiki/Identity_function) that returns the same value it
receives. This hasher is only an option when the key type in your storage map is _already_ a hash,
and is not controllable by the user. If you're in doubt whether the user can influence the key just
use blake2.


## The Storage Map API
[Documentation](https://paritytech.github.io/polkadot-sdk/master/frame_support/storage/trait.StorageMap.html)
This pallet demonstrated some of the most common methods available in a storage map including
`insert`, `get`, `take`, and `contains_key`.

```rust, ignore
// Insert
<SimpleMap<T>>::insert(&user, entry);

// Get
let entry = <SimpleMap<T>>::get(account);

// Take
let entry = <SimpleMap<T>>::take(&user);

// Contains Key
<SimpleMap<T>>::contains_key(&user)

// Mutate
<SimpleMap<T>>::mutate(&user, |entry_option| {
							 *entry_option = Some(entry);
            });
```

## `insert` and `mutate`

When deciding between `mutate` and `insert` to update storage, consider the following:

`Insert` performs a simple write operation to the database, which is the more efficient option.

On the other hand, `mutate` involves a read operation followed by a write, making it a more expensive database operation.

Therefore, when you have the option to use `insert` (i.e., you don't need to read the existing value), it's recommended to use `insert` over `mutate`.

`Insert` is suitable for inserting or overwriting an existing value. If you simply want to store a specific value, `insert` is the way to go.

`Mutate`, however, is designed for scenarios where you need to modify the existing value or make decisions based on its current state. Use `mutate` when you need to perform conditional updates or modifications that depend on the current value."


## Quiz
{{#quiz storage_maps.toml}}
