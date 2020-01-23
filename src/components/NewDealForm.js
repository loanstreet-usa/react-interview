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
};

class DealForm extends Component {
  static propTypes = {
    onCreateDeal: PropTypes.func,
  };

  static defaultProps = {
    onCreateDeal: noop,
  };

  showErrorMessages = false;
  errorMessages = [];

  // State represents a deal.
  state = { ...DEFAULT_DEAL };

  propertyUpdater(property) {
    return e => {
      // TODO: check for input type

      // Reset error messages on user input.
      if (this.errorMessages.length) {
        this.errorMessages = [];
      }
      if (property === 'dealSize') {
        console.log(typeof(+e.target.value));
      }
      return this.setState({ [property]: e.target.value });
    };
  }

  get hasAllValues() {
    return !!(
      this.state.institution &&
      this.state.dealType &&
      this.state.dealSize
    );
  }

  validateData() {
    if (!this.state.institution) {
      this.errorMessages.push('Institution is a required field');
    }
    if (!this.state.dealType) {
      this.errorMessages.push('Deal type is a required field');
    }
    if (!this.state.dealSize) {
      this.errorMessages.push('Deal size is a required field');
    }
  }

  createDeal = e => {
    e.preventDefault();
    this.validateData();
    this.showErrorMessages = true;
    console.log(this.errorMessages, this.state.isPublished)
    if (this.props.onCreateDeal && !this.errorMessages.length) {
      this.props.onCreateDeal({ ...this.state });
    }
    // Reset state for the next deal input.
    this.setState({ ...DEFAULT_DEAL });
  };

  render() {
    return (
      <div>
        <form className="NewDealForm">
          <div className="NewDealForm--div">
            <label className="NewDealForm--label">
              Institution:
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
            <label className="NewDealForm--label">
              Deal Type:
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
            <label className="NewDealForm--label">
              Deal Size:
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
          <button className="NewDealForm--button" onClick={this.createDeal}>
            Create Deal
          </button>
        </form>
        {this.errorMessages.length && this.showErrorMessages ? (
          <div className="NewDealForm--errors-container">
            <span>We need some more info from you before we can submit:</span>
            <ul className="NewDealForm--errors-list">
              <li>test</li>
              <li>test</li>
            </ul>
          </div>
        ) : null}
      </div>
    );
  }
}

export default DealForm;
