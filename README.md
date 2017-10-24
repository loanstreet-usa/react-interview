# CW comments

- In office test
- 1.5 hours

# Setup

Fork the repo and clone locally

You need npm and yarn installed (`brew install npm` and `brew install yarn`).

To install run `npm install`

To start a local server run the command `yarn start` in the root directory of the repository.

# Assignment

Please complete in any order whichever features or questions you wish. If you're doing this on-site, it's not expected that everything is completed within an hour.  When complete, just submit a PR.  Thank you!

## Features

* Add validation so that a deal isn't created unless all fields are entered.  Display errors when a field is missing or contains bad data.

* Add ability to remove deals from the `DealsTable` (interface up to you).

* Add ability to publish a deal from the `DealsTable` (interface up to you).

* Add ability to sort deal rows in ascending order by clicking the header cell of the field by which you wish to order.

## Questions

* `NewDealForm` will rerender some of its children unnecessarily.  Why? What is the generally recommended solution?

* How would you hook this frontend to a backend (vs storing the data locally in the store only).  How would you load initial data?

* What other suggestions can you make to improve the quality of the code?

