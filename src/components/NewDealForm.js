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
    onCreateDeal: PropTypes.func.isRequired
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
    if (this.isInputValid(this.state)) {
      this.props.onCreateDeal({
        institution: this.state.institution,
        dealType: this.state.dealType,
        dealSize: this.state.dealSize,
        isPublished: this.state.isPublished,
      });

      // Reset state for the next deal input.
      this.setState({ ...DEFAULT_DEAL });
    }
  }

  isInputValid(state) {
    const errorMessages = [];
    errorMessages.push(this.isInputMissing(state));
    errorMessages.push(this.isDealSizeValid(state.dealSize));
    errorMessages.push(this.isDealAmountValid(state.dealSize));
    errorMessages.push(this.isPhraseValid(state.institution, "Institution"));
    errorMessages.push(this.isPhraseValid(state.dealType, "Deal Type"));
    errorMessages.push(this.isCharLengthValid(state.institution, "Institution"));
    errorMessages.push(this.isCharLengthValid(state.dealType, "Deal Type"));
    const validMessages = errorMessages.reduce((msgList, msg) => {
      if (msg !== '') msgList.push(msg);
      return msgList;
    },[])
    this.setState({errorMessages: validMessages})
    return validMessages.length === 0;
  }

  isInputMissing(state) {
    const institution = state.institution === '' ? 'Institution, ' : '';
    const dealType = state.dealType === '' ? 'Deal Type, ' : '';
    const dealSize = state.dealSize === '' ? 'Deal Size, ' : '';
    const missingFields = (institution + dealType + dealSize).slice(0,-2);
    if (institution !== '' || dealType !== '' || dealSize !== ''){
      return `Missing input from the following field(s): ${missingFields}.`;
    }
    return '';
  }

  isCharLengthValid(phrase, type) {
    if (phrase.length !== 0 && (phrase.length < 3 || phrase.length > 30)) {
      return `Invalid character length for ${type}. Must be between 3 and 30 characters.`;
    }
    return '';
  }

  isDealAmountValid(dealSize) {
    if (dealSize.length !== 0 && (dealSize.length < 5 || dealSize.length > 9)) {
      return `Invalid amount for Deal Size. Must be between $10,000 and $999,999,999.`;
    }
    return '';
  }

  isDealSizeValid(dealSize) {
    if (!Number.isInteger(Number(dealSize))) return 'Invalid input for deal size. Please enter numbers only.';
    return '';
  }

  isPhraseValid(phrase, type) {
    if (!this.areCharactersValid(phrase)) return `Invalid characters for ${type}, only letters and spaces are allowed.`;
    return '';
  }

  areCharactersValid(phrase) {
    const a = 97;
    const z = 122;
    const space = 32;
    return phrase.split('').every((char)=>{
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
