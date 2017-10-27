import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DealsTableWithData from '../containers/DealsTableWithData';
import NewDealFormWithDispatch from '../containers/NewDealFormWithDispatch';

import './App.css';

class App extends Component {
  static propTypes = {
    selectedDeal: PropTypes.shape({
      institution: PropTypes.string.isRequired,
      dealType: PropTypes.string.isRequired,
      dealSize: PropTypes.string.isRequired,
      isPublished: PropTypes.bool.isRequired
    }).isRequired,
    selectionReason: PropTypes.oneOf(['remove', 'publish', '']).isRequired
  }

  render() {
    return (
      <div className="App">
        <DealsTableWithData />
        {(this.props.selectionReason === '') && <NewDealFormWithDispatch />}
      </div>
    );
  }
}

export default App;
