# Setup

Clone or Fork the repo

You need yarn installed (For Mac, `brew install yarn`).

To install run `yarn install`

To start a local server run the command `yarn start` in the root directory of the repository.

After completion you can

- Submit a pull request

- Or you can email the url of the repo if public

# Assignment

Please complete at least one feature and answer at least one question

## Features

* Add validation so that a deal isn't created unless all fields are entered.  Display errors when a field is missing or contains bad data.

* Add ability to remove deals from the `DealsTable` (interface up to you).

* Add ability to publish a deal from the `DealsTable` (interface up to you).

* Add ability to sort deal rows in ascending or descending order by clicking the header cell of the different fields by which you wish to order.

## Questions

* `NewDealForm` will rerender some of its children unnecessarily.  Why? What is the generally recommended solution?
The `propertyUpdater` method resets the state with every input change in any of the three fields, which results in a lot of rerendering. In React apps, every `setState` causes a rerender. The extra rerendering can be avoided by 1) not re-setting the state on input change, but instead grab all the input values on form submit; or 2) making each input field pure components, and use the `shouldComponentUpdate` lifecycle hook to check for differences and determine the necessity to re-render.

* How would you hook this frontend to a backend (vs storing the data locally in the store only).  How would you load initial data?

* What other suggestions can you make to improve the quality of the code?

