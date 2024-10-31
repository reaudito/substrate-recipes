
//! Autogenerated weights for `pallet_template`
//!
//! THIS FILE WAS AUTO-GENERATED USING THE SUBSTRATE BENCHMARK CLI VERSION 42.0.0
//! DATE: 2024-09-22, STEPS: `50`, REPEAT: `20`, LOW RANGE: `[]`, HIGH RANGE: `[]`
//! WORST CASE MAP SIZE: `1000000`
//! HOSTNAME: `amiya`, CPU: `12th Gen Intel(R) Core(TM) i7-12650H`
//! WASM-EXECUTION: `Compiled`, CHAIN: `Some("dev")`, DB CACHE: `1024`

// Executed Command:
// target/release/solochain-template-node
// benchmark
// pallet
// --chain
// dev
// --execution
// wasm
// --wasm-execution
// compiled
// --pallet
// pallet-template
// --extrinsic
// *
// --steps
// 50
// --repeat
// 20
// --output
// pallets/template/src/weights.rs
// --template=./.maintain/frame-weight-template.hbs

#![cfg_attr(rustfmt, rustfmt_skip)]
#![allow(unused_parens)]
#![allow(unused_imports)]
#![allow(missing_docs)]

use frame_support::{traits::Get, weights::{Weight, constants::RocksDbWeight}};
use core::marker::PhantomData;

/// Weight functions needed for `pallet_template`.
pub trait WeightInfo {
	fn do_something() -> Weight;
	fn cause_error() -> Weight;
}

/// Weights for `pallet_template` using the Substrate node and recommended hardware.
pub struct SubstrateWeight<T>(PhantomData<T>);
impl<T: frame_system::Config> WeightInfo for SubstrateWeight<T> {
	/// Storage: `TemplateModule::Something` (r:0 w:1)
	/// Proof: `TemplateModule::Something` (`max_values`: Some(1), `max_size`: Some(4), added: 499, mode: `MaxEncodedLen`)
	fn do_something() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `0`
		//  Estimated: `0`
		// Minimum execution time: 3_376_000 picoseconds.
		Weight::from_parts(3_966_000, 0)
			.saturating_add(T::DbWeight::get().writes(1_u64))
	}
	/// Storage: `TemplateModule::Something` (r:1 w:1)
	/// Proof: `TemplateModule::Something` (`max_values`: Some(1), `max_size`: Some(4), added: 499, mode: `MaxEncodedLen`)
	fn cause_error() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `32`
		//  Estimated: `1489`
		// Minimum execution time: 3_414_000 picoseconds.
		Weight::from_parts(3_728_000, 1489)
			.saturating_add(T::DbWeight::get().reads(1_u64))
			.saturating_add(T::DbWeight::get().writes(1_u64))
	}
}

// For backwards compatibility and tests.
impl WeightInfo for () {
	/// Storage: `TemplateModule::Something` (r:0 w:1)
	/// Proof: `TemplateModule::Something` (`max_values`: Some(1), `max_size`: Some(4), added: 499, mode: `MaxEncodedLen`)
	fn do_something() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `0`
		//  Estimated: `0`
		// Minimum execution time: 3_376_000 picoseconds.
		Weight::from_parts(3_966_000, 0)
			.saturating_add(RocksDbWeight::get().writes(1_u64))
	}
	/// Storage: `TemplateModule::Something` (r:1 w:1)
	/// Proof: `TemplateModule::Something` (`max_values`: Some(1), `max_size`: Some(4), added: 499, mode: `MaxEncodedLen`)
	fn cause_error() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `32`
		//  Estimated: `1489`
		// Minimum execution time: 3_414_000 picoseconds.
		Weight::from_parts(3_728_000, 1489)
			.saturating_add(RocksDbWeight::get().reads(1_u64))
			.saturating_add(RocksDbWeight::get().writes(1_u64))
	}
}
