import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DealsTableWithData from '../containers/DealsTableWithData';
import NewDealFormWithDispatch from '../containers/NewDealFormWithDispatch';

import './App.css';

class App extends Component {
  static propTypes = { selectionReason: PropTypes.oneOf(['remove', 'publish', '']).isRequired }

  render() {
    return (
      <div className="App">
        <DealsTableWithData />
        {/* only display NewDealForm when a deal isn't selected for removal/publication  */}
        {(this.props.selectionReason === '') && <NewDealFormWithDispatch />}
      </div>
    );
  }
}

export default App;
