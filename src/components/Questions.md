* `NewDealForm` will rerender some of its children unnecessarily.  Why? What is the generally recommended solution?

Each of the `input` elements invoke the method `propertyUpdater` for their `onChange` handler.  The issue is that the `propertyUpdater` method is creating and returning a new functions on each invocation.  React will invoke `render` and then reconcile the result with the current `DOM` in order to determine whether the `DOM`, and this component's children, should be updated.  Since `propertyUpdater` always returns a new function (...effectively a new object), react's reconciliation will believe that this component and all it's children will always need to udpate.

To resolve we need have separate handler instances for each input, these handlers should live for the component's entire lifecycle.  We could use the same `propertyUpdater` method to create these in the `ctor` and pass to the input elements.  Alternatively the inputs could be refactored into a new component.  Either way, we must avoid re-creating the handler on ever render.

* How would you hook this frontend to a backend (vs storing the data locally in the store only).  How would you load initial data?

* What other suggestions can you make to improve the quality of the code?

