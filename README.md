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

### Add validation so that a deal isn't created unless all fields are entered. Display errors when a field is missing or contains bad data.

**[Complete]**

### Add ability to remove deals from the `DealsTable` (interface up to you).

**[Complete]**

### Add ability to publish a deal from the `DealsTable` (interface up to you).

### Add ability to sort deal rows in ascending or descending order by clicking the header cell of the different fields by which you wish to order.

## Questions

### `NewDealForm` will rerender some of its children unnecessarily. Why? What is the generally recommended solution?

The NewDealForm contains one state that controls the values of all 3 form fields. As a result, any time any of the fields change and propertyHandler is called, the entire component rerenders. Two approaches to handle this issue:

1. Modularizing the form fields into functional components (using hooks) or classes that manage their own state.
2. Not controlling the form fields onChange, but to capture the values once a user hits submit.

### How would you hook this frontend to a backend (vs storing the data locally in the store only). How would you load initial data?

The data seems to be relational in schema. I would implement a SQL database & connect it to an Express server, exposing the following endpoints:

#### **GET /deals**

Returns an array of deals

##### Request Param

sort - column to sort by

order - asc or dsc

##### Sample Response

```json
{
  "deals": [
    {
      "id": 1,
      "institution": "LS Credit Union",
      "dealSize": "1000000",
      "dealType": "Consumer Auto",
      "isPublished": true
    },
    {
      "id": 2,
      "institution": "LS Credit Union",
      "dealSize": "5000000",
      "dealType": "Real Estate",
      "isPublished": false
    }
  ]
}
```

#### **POST /deals**

Allows client to add a deal when `NewDealForm` is submitted.

##### Request Body

```json
{
  "institution": "LS Credit Union",
  "dealSize": "10000",
  "dealType": "Student Loan",
  "isPublished": false
}
```

##### Sample Response

```json
{
  "id": 3
}
```

#### **DELETE /deals**

Allows client to delete a deal by id.

##### Request Param

id

##### Sample Response

```json
{
  "success": true
}
```

To load in the initial data, I would first define a schema using SQL. Then, I would analyze the quality of the initial data and decide what type of ETL process I should use to load it in. This could as involved as writing a script to read the file line-by-line to perform necessary transformations before loading the data, or if the dataset is smaller & cleaner to begin with, I would manually look through the data and clean it before loading it in using SQL.

- What other suggestions can you make to improve the quality of the code?
