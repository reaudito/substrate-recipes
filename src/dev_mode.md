# Dev Mode

Dev mode allows you to write code without assigning weights to functions. Weights are an essential mechanism for measuring and limiting usage, establishing an economic incentive structure, preventing network overload, and mitigating DoS vulnerabilities. Weights are calculated during benchmarking.

If you want to write functions without doing benchmarking, you can use dev mode. You can write the benchmark later on, once you've completed the prototyping and testing.

To convert your pallet to dev mode, use `#[frame_support::pallet(dev_mode)]`


Use:

```rust,ignore
#[frame_support::pallet(dev_mode)]
pub mod pallet {
```

instead of

```rust,ignore
#[frame_support::pallet]
pub mod pallet {
```

You can write functions without assigning any weight using 	`#[pallet::weight(0)]`



```rust,ignore
#[pallet::call]
impl<T: Config> Pallet<T> {
	#[pallet::call_index(0)]
	#[pallet::weight(0)]
	pub fn do_something(origin: OriginFor<T>, something: u32) -> DispatchResult {
		let who = ensure_signed(origin)?;

		Something::<T>::put(something);
		Self::deposit_event(Event::SomethingStored { something, who });

		Ok(())
	}
```


## Quiz
{{#quiz dev_mode.toml}}
