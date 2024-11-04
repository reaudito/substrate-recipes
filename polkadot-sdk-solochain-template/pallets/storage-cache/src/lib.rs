// We make sure this pallet uses `no_std` for compiling to Wasm.
#![cfg_attr(not(feature = "std"), no_std)]

// Re-export pallet items so that they can be accessed from the crate namespace.
pub use pallet::*;

// FRAME pallets require their own "mock runtimes" to be able to run unit tests. This module
// contains a mock runtime specific for testing this pallet's functionality.
#[cfg(test)]
mod mock;

// This module contains the unit tests for this pallet.
// Learn about pallet unit testing here: https://docs.substrate.io/test/unit-testing/
#[cfg(test)]
mod tests;

// Every callable function or "dispatchable" a pallet exposes must have weight values that correctly
// estimate a dispatchable's execution time. The benchmarking module is used to calculate weights
// for each dispatchable and generates this pallet's weight.rs file. Learn more about benchmarking here: https://docs.substrate.io/test/benchmark/
#[cfg(feature = "runtime-benchmarks")]
mod benchmarking;
pub mod weights;
pub use weights::*;

// All pallet logic is defined in its own module and must be annotated by the `pallet` attribute.
#[frame_support::pallet(dev_mode)]
pub mod pallet {
    // Import various useful types required by all FRAME pallets.
    use super::*;
    use frame_support::pallet_prelude::*;
    use frame_system::pallet_prelude::*;

    // The `Pallet` struct serves as a placeholder to implement traits, methods and dispatchables
    // (`Call`s) in this pallet.
    #[pallet::pallet]
    pub struct Pallet<T>(_);

    /// The pallet's configuration trait.
    ///
    /// All our types and constants a pallet depends on must be declared here.
    /// These types are defined generically and made concrete when the pallet is declared in the
    /// `runtime/src/lib.rs` file of your chain.
    #[pallet::config]
    pub trait Config: frame_system::Config {
        /// The overarching runtime event type.
        type RuntimeEvent: From<Event<Self>> + IsType<<Self as frame_system::Config>::RuntimeEvent>;
        /// A type representing the weights required by the dispatchables of this pallet.
        type WeightInfo: WeightInfo;
    }

    #[pallet::storage]
    #[pallet::getter(fn some_copy_value)]
    pub(super) type SomeCopyValue<T: Config> = StorageValue<_, u32>;

    #[pallet::storage]
    #[pallet::getter(fn king_member)]
    pub(super) type KingMember<T: Config> = StorageValue<_, T::AccountId>;

    #[pallet::storage]
    #[pallet::getter(fn group_members)]
    pub(super) type GroupMembers<T: Config> = StorageValue<_, Vec<T::AccountId>>;

    /// Events that functions in this pallet can emit.
    ///
    /// Events are a simple means of indicating to the outside world (such as dApps, chain explorers
    /// or other users) that some notable update in the runtime has occurred. In a FRAME pallet, the
    /// documentation for each event field and its parameters is added to a node's metadata so it
    /// can be used by external interfaces or tools.
    ///
    ///	The `generate_deposit` macro generates a function on `Pallet` called `deposit_event` which
    /// will convert the event type of your pallet into `RuntimeEvent` (declared in the pallet's
    /// [`Config`] trait) and deposit it using [`frame_system::Pallet::deposit_event`].
    #[pallet::event]
    #[pallet::generate_deposit(pub(super) fn deposit_event)]
    pub enum Event<T: Config> {
        // swap old value with new value (new_value, time_now)
        InefficientValueChange(u32, BlockNumberFor<T>),
        // '' (new_value, time_now)
        BetterValueChange(u32, BlockNumberFor<T>),
        // swap old king with new king (old, new)
        InefficientKingSwap(T::AccountId, T::AccountId),
        // '' (old, new)
        BetterKingSwap(T::AccountId, T::AccountId),
    }

    /// Errors that can be returned by this pallet.
    ///
    /// Errors tell users that something went wrong so it's important that their naming is
    /// informative. Similar to events, error documentation is added to a node's metadata so it's
    /// equally important that they have helpful documentation associated with them.
    ///
    /// This type of runtime error can be up to 4 bytes in size should you want to return additional
    /// information.
    #[pallet::error]
    pub enum Error<T> {
        /// The requested user has not stored a value yet
        NoValueStored,

        /// The value cannot be incremented further because it has reached the maximum allowed value
        MaxValueReached,
    }

    /// The pallet's dispatchable functions ([`Call`]s).
    ///
    /// Dispatchable functions allows users to interact with the pallet and invoke state changes.
    /// These functions materialize as "extrinsics", which are often compared to transactions.
    /// They must always return a `DispatchResult` and be annotated with a weight and call index.
    ///
    /// The [`call_index`] macro is used to explicitly
    /// define an index for calls in the [`Call`] enum. This is useful for pallets that may
    /// introduce new dispatchables over time. If the order of a dispatchable changes, its index
    /// will also change which will break backwards compatibility.
    ///
    /// The [`weight`] macro is used to assign a weight to each call.
    #[pallet::call]
    impl<T: Config> Pallet<T> {
        #[pallet::call_index(0)]
        #[pallet::weight(0)]
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

        /// Read the value stored at a particular key and emit it in an event
        #[pallet::call_index(1)]
        #[pallet::weight(0)]
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
        /// Read the value stored at a particular key, while removing it from the map.
        /// Also emit the read value in an event
        #[pallet::call_index(2)]
        #[pallet::weight(0)]
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
            // new_king without clone gives move error
            // <KingMember<T>>::put(new_king);

            Self::deposit_event(Event::InefficientKingSwap(old_king.unwrap(), new_king));
            Ok(().into())
        }

        /// Increase the value associated with a particular key
        #[pallet::call_index(3)]
        #[pallet::weight(0)]
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

        #[pallet::call_index(4)]
        #[pallet::weight(0)]
        pub fn set_copy(origin: OriginFor<T>, val: u32) -> DispatchResultWithPostInfo {
            let _ = ensure_signed(origin)?;
            <SomeCopyValue<T>>::put(val);
            Ok(().into())
        }

        #[pallet::call_index(5)]
        #[pallet::weight(0)]
        pub fn set_king(origin: OriginFor<T>) -> DispatchResultWithPostInfo {
            let user = ensure_signed(origin)?;
            <KingMember<T>>::put(user);
            Ok(().into())
        }

        #[pallet::call_index(6)]
        #[pallet::weight(0)]
        pub fn mock_add_member(origin: OriginFor<T>) -> DispatchResultWithPostInfo {
            let added = ensure_signed(origin)?;
            ensure!(!Self::is_member(&added), "member already in group");
            <GroupMembers<T>>::append(added);
            Ok(().into())
        }
    }
}

impl<T: Config> Pallet<T> {
    pub fn is_member(who: &T::AccountId) -> bool {
        <GroupMembers<T>>::get().unwrap().contains(who)
    }
}
