Object.assign(window.search, {"doc_urls":["using_events.html#using-events","using_events.html#quiz"],"index":{"documentStore":{"docInfo":{"0":{"body":77,"breadcrumbs":4,"title":2},"1":{"body":0,"breadcrumbs":3,"title":1}},"docs":{"0":{"body":"An event is a mechanism for emitting notifications about specific actions or state changes that occur within a blockchain runtime. Events are typically used to inform the outside world about occurrences such as token transfers, account creations, or other significant operations within the blockchain. #[pallet::event]\n#[pallet::generate_deposit(pub(super) fn deposit_event)]\npub enum Event<T: Config> { /// A user has successfully set a new value. SomethingStored { /// The new value set. something: u32, /// The account who set the new value. who: T::AccountId, },\n} #[pallet::call_index(0)]\n#[pallet::weight(T::WeightInfo::do_something())]\npub fn do_something(origin: OriginFor<T>, something: u32) -> DispatchResult { // Check that the extrinsic was signed and get the signer. let who = ensure_signed(origin)?; // Update storage. Something::<T>::put(something); // Emit an event. Self::deposit_event(Event::SomethingStored { something, who }); // Return a successful `DispatchResult` Ok(())\n}","breadcrumbs":"Using Events » Using Events","id":"0","title":"Using Events"},"1":{"body":"","breadcrumbs":"Using Events » Quiz","id":"1","title":"Quiz"}},"length":2,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"a":{"c":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"df":0,"docs":{}},"b":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"k":{"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"df":0,"docs":{}}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"_":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}}}}}},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"p":{"a":{"df":0,"docs":{},"t":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"o":{"_":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"(":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}},"df":0,"docs":{}}}}}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"_":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"d":{"(":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}}},"u":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"<":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":1,"docs":{"0":{"tf":2.0}}}}}},"x":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}},"f":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"m":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"o":{"c":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"k":{"df":1,"docs":{"0":{"tf":1.0}}},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"<":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}}}}}},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}}},"p":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{":":{":":{"c":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"_":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"(":{"0":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":1,"docs":{"0":{"tf":1.0}}}},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"_":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"(":{"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"b":{"(":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"df":0,"docs":{},"p":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"(":{"df":0,"docs":{},"t":{":":{":":{"df":0,"docs":{},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{":":{":":{"d":{"df":0,"docs":{},"o":{"_":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"u":{"b":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"z":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"f":{":":{":":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"_":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"(":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{":":{":":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"t":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}}}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":1.7320508075688772}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{":":{":":{"<":{"df":0,"docs":{},"t":{">":{":":{":":{"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"(":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}}}}}}},"p":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}},"t":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}},"u":{"c":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}},"f":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}}}},"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"t":{":":{":":{"a":{"c":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"r":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"df":0,"docs":{}},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}},"u":{"3":{"2":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{},"p":{"d":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}},"s":{"df":1,"docs":{"0":{"tf":1.4142135623730951}},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"v":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}}},"df":0,"docs":{}},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}}}},"breadcrumbs":{"root":{"a":{"c":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"df":0,"docs":{}},"b":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"k":{"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"df":0,"docs":{}}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"_":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}}}}}},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"p":{"a":{"df":0,"docs":{},"t":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"o":{"_":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"(":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}},"df":0,"docs":{}}}}}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"_":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"d":{"(":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}}},"u":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"<":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":2,"docs":{"0":{"tf":2.449489742783178},"1":{"tf":1.0}}}}}},"x":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}},"f":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"m":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"o":{"c":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"k":{"df":1,"docs":{"0":{"tf":1.0}}},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"<":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}}}}}},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}}},"p":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{":":{":":{"c":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"_":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"(":{"0":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":1,"docs":{"0":{"tf":1.0}}}},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"_":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"(":{"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"b":{"(":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"df":0,"docs":{},"p":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"(":{"df":0,"docs":{},"t":{":":{":":{"df":0,"docs":{},"w":{"df":0,"docs":{},"e":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{":":{":":{"d":{"df":0,"docs":{},"o":{"_":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"u":{"b":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"z":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"f":{":":{":":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"_":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"(":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{":":{":":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"t":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}}}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":1.7320508075688772}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{":":{":":{"<":{"df":0,"docs":{},"t":{">":{":":{":":{"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"(":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}}}}}}},"p":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}},"t":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}},"u":{"c":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}},"f":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}}}},"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"t":{":":{":":{"a":{"c":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"r":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"df":0,"docs":{}},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}},"u":{"3":{"2":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{},"p":{"d":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}},"s":{"df":2,"docs":{"0":{"tf":2.0},"1":{"tf":1.0}},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"v":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}}},"df":0,"docs":{}},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}}}},"title":{"root":{"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"z":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});