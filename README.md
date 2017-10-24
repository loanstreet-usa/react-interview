# Install and Run

You need npm and yarn installed (`brew install npm` and `brew install yarn`).

To install run `npm install`

To start a local server run the command `yarn start` in the root directory of the repository.

# Assignment

* Add validation so that a deal isn't created unless all fields are entered.  Display errors when a field is missing or contains bad data.

* Add ability to remove deals from the `DealsTable` (interface up to you).

* Add ability to publish a deal from the `DealsTable` (interface up to you).

* Add ability to sort deal rows in ascending order by clicking the header cell of the field by which you wish to order.

# Questions

* `NewDealForm` will rerender some of its children unnecessarily.  Why? 
What is the generally recommended solution?

- Developing a shouldComponentUpdate method or creating different components for its children

* How would you hook this frontend to a backend (vs storing the data locally in the store only).  How would you load initial data?

- Saving in a database or in localStorage

* What other suggestions can you make to improve the quality of the code?

- Doing some testing

* How would you hook this frontend to a backend (vs storing the data locally in the store only).  How would you load initial data?

* What other suggestions can you make to improve the quality of the code?