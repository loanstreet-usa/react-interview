import React, { Component } from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

import './SelectionScreen.css';

class SelectionScreen extends Component {
  static propTypes = {
    selectedDeal: PropTypes.shape({
        id: PropTypes.number.isRequired,
        institution: PropTypes.string.isRequired,
        dealSize: PropTypes.string.isRequired,
        dealType: PropTypes.string.isRequired,
        isPublished: PropTypes.bool.isRequired
      }).isRequired,
    selectionReason: PropTypes.oneOf(['remove', 'publish']).isRequired,
    onRemoveDeal: PropTypes.func.isRequired,
    onPublishDeal: PropTypes.func.isRequired,
    onCancelSelection: PropTypes.func.isRequired,
  }

  static defaultProps = {
    onRemoveDeal: noop,
    onPublishDeal: noop,
    onCancelSelection: noop,
  }

  removeDeal = deal => {
    this.props.onRemoveDeal(deal);
  }

  publishDeal = deal => {
    this.props.onPublishDeal(deal);
  }

  cancelSelection = () => {
    this.props.onCancelSelection();
  }

  render() {
    const deal = this.props.selectedDeal;
    const reason = this.props.selectionReason;
    const onConfirmation = this[reason+'Deal'];
    return(
      <div className="SelectionScreen">
        <h2 className="SelectionReason">{`Would you like to ${reason} the deal above?`}</h2>
        <div className="SelectionBtnArea">
          <p id="ConfirmBtn" className="SelectionBtn" onClick={() => onConfirmation(deal)}>Confirm</p>
          <p id="CancelBtn" className="SelectionBtn" onClick={this.cancelSelection}>Cancel</p>
        </div>
      </div>
    );
  }
}

export default SelectionScreen;
