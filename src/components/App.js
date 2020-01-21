import React, { Component } from 'react';
import DealsTableWithDataAndDispatch from '../containers/DealsTableWithDataAndDispatch';
import NewDealFormWithDispatch from '../containers/NewDealFormWithDispatch';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DealsTableWithDataAndDispatch />
        <NewDealFormWithDispatch />
      </div>
    );
  }
}

export default App;
