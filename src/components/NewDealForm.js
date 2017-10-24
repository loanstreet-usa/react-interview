import React, { Component } from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

import './NewDealForm.css';

// We might make this another property.
const DEFAULT_DEAL = {
  institution: '',
  dealType: '',
  dealSize: '',
  isPublished: false
};

class DealForm extends Component {
  static propTypes = {
    onCreateDeal: PropTypes.func
  }

  static defaultProps = {
    onCreateDeal: noop
  }

  // State represents a deal.
  state = {  ...DEFAULT_DEAL, errors: { ...DEFAULT_DEAL } };

  propertyUpdater(property) {
    return e => this.setState({ [property]: property == 'dealSize' ? e.target.value.replace(/[^\d]/g, '') : e.target.value });
  }

  createDeal = e => {
    e.preventDefault();
    if (this.props.onCreateDeal && this.validateDeal().isValid){
      this.props.onCreateDeal({ ...this.state });

      // Reset state for the next deal input.
      this.setState({ ...DEFAULT_DEAL, errors: { ...DEFAULT_DEAL } });
    }
  }

  validateDeal = (deal = this.state) => {
    for (var field in deal){
      if (!['isPublished', 'errors'].includes(field)){
        if (!deal[field]){
          this.setState({ errors: { ...this.state.errors, [field]: 'Must enter a value.' } });
          this.refs[field].focus();
          return { field };
        }
        if (['institution', 'dealType'].includes(field)){
          //
        }
        else if (field == 'dealSize'){
          if (!deal[field].replace(/[^\d]/g, '')){
            this.setState({ errors: { ...this.state.errors, [field]: 'Must enter a number.' } });
            this.refs[field].focus();
            return { field };
          }
        }
      }
    }
    return { isValid: true };
  }

  render() {
    return (
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
            { this.state.errors.institution && <div className='error'>{this.state.errors.institution}</div> }
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
            { this.state.errors.dealType && <div className='error'>{this.state.errors.dealType}</div> }
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
            { this.state.errors.dealSize && <div className='error'>{this.state.errors.dealSize}</div> }
          </label>
        </div>
        <button className="NewDealForm--button" onClick={this.createDeal}>Create Deal</button>
      </form>
    );
  }
};

export default DealForm;
