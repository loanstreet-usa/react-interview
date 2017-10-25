import React, { Component } from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

import './NewDealForm.css';

// We might make this another property.
const DEFAULT_DEAL = {
  institution: '',
  dealType: '',
  dealSize: '',
  isPublished: false,
  errorMessages: []
};

class DealForm extends Component {
  static propTypes = {
    onCreateDeal: PropTypes.func
  }

  static defaultProps = {
    onCreateDeal: noop
  }

  // State represents a deal.
  state = { ...DEFAULT_DEAL };

  propertyUpdater(property) {
    return e => this.setState({[property]: e.target.value});
  }

  createDeal = e => {
    e.preventDefault();
    if (this.props.onCreateDeal && this.isInputValid(this.state)) {
      const institution = this.state.institution;
      const dealType = this.state.dealType;
      const dealSize = this.state.dealSize;
      const isPublished = this.state.isPublished;
      this.props.onCreateDeal({ institution, dealType, dealSize, isPublished });

      // Reset state for the next deal input.
      this.setState({ ...DEFAULT_DEAL });
    }
  }

  isInputValid(state) {
    let errorMessages = [];
    errorMessages = this.isInputMissing(errorMessages, state);
    errorMessages = this.isDealSizeValid(errorMessages, state);
    errorMessages = this.isPhraseValid(errorMessages, state.institution, "Institution");
    errorMessages = this.isPhraseValid(errorMessages, state.dealType, "Deal Type");
    this.setState({errorMessages})
    return errorMessages.length === 0;
  }

  isInputMissing(errorMessages, state) {
    if (state.institution === '' || state.dealType === '' || state.dealSize === ''){
      errorMessages.push('Missing data from input field')
    }
    return errorMessages;
  }

  isDealSizeValid(errorMessages, state) {
    const dealSize = Number(state.dealSize);
    if (!Number.isInteger(dealSize)) errorMessages.push('Invalid number for deal size');
    return errorMessages;
  }

  isPhraseValid(errorMessages, phrase, type) {
    if (!this.areCharactersValid(phrase)) errorMessages.push(`Invalid characters for ${type}, only letters and spaces are allowed`);
    return errorMessages;
  }

  areCharactersValid(phrase) {
    const a = 97;
    const z = 122;
    const space = 32;
    return phrase.split("").every((char)=>{
      const charCode = char.toLowerCase().charCodeAt(0);
      return (charCode >= a && charCode <= z) || (charCode === space);
    })
  }


  render() {
    const errorMessages = this.state.errorMessages.map((errorMsg, index)=><li key={index}>{errorMsg}</li>);
    return (
      <div>
        <form className="NewDealForm">
          <div className="NewDealForm--div">
            <label className="NewDealForm--label">Institution:
              <input
                className="NewDealForm--input"
                ref="institution"
                value={this.state.institution}
                placeholder="LS Credit Union"
                onChange={this.propertyUpdater('institution')}
                required
              />
            </label>
          </div>
          <div>
            <label className="NewDealForm--label">Deal Type:
              <input
                className="NewDealForm--input"
                ref="dealType"
                value={this.state.dealType}
                placeholder="Consumer Auto"
                onChange={this.propertyUpdater('dealType')}
                required
              />
            </label>
          </div>
          <div>
            <label className="NewDealForm--label">Deal Size:
              <input
                className="NewDealForm--input"
                ref="dealSize"
                value={this.state.dealSize}
                placeholder="$1,000,000"
                onChange={this.propertyUpdater('dealSize')}
                required
              />
            </label>
          </div>
          <button className="NewDealForm--button" onClick={this.createDeal}>Create Deal</button>
        </form>
        <ul id="ErrorMsgArea">
          {(errorMessages.length !== 0) && errorMessages}
        </ul>
      </div>
    );
  }
};

export default DealForm;
