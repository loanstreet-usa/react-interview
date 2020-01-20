import React, { PureComponent } from 'react';
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
const DEFAULT_ERRORS = {
  institution: null,
  dealType: null,
  dealSize: null
}

class DealForm extends PureComponent {
  static propTypes = {
    onCreateDeal: PropTypes.func
  }

  static defaultProps = {
    onCreateDeal: noop
  }

  // State represents a deal.
  state = { deal: { ...DEFAULT_DEAL }, errors: { ...DEFAULT_ERRORS } };

  propertyUpdater(e, property) {
    if (this.state.errors[property] !== null) {
      this.setState({ errors: { ...this.state.errors, [property]: null } })
    }
    this.setState({ deal: { ...this.state.deal, [property]: e.target.value } });
  }



  createDeal = e => {
    e.preventDefault();
    const errors = { ...DEFAULT_ERRORS };
    let cleanedDealSize;
    const { institution, dealType, dealSize } = this.state.deal;
    if (institution.length === 0) {
      errors.institution = "Please enter an institution name."
    }
    if (dealType.length === 0) {
      errors.dealType = "Please enter a deal type."
    }
    if (dealSize.length === 0) {
      errors.dealSize = "Please enter a deal size."
    } else {
      cleanedDealSize = dealSize.split("").filter((x) => x !== "$" && x !== ",").join("");
      if (isNaN(cleanedDealSize + 1)) {
        errors.dealSize = "That is not a valid deal amount."
      }
    }
    this.setState({ errors })
    if (Object.keys(errors).every((key) => errors[key] === null)) {
      this.props.onCreateDeal({ ...this.state.deal, dealSize: cleanedDealSize });
      // Reset state for the next deal input.
      this.setState({ deal: { ...DEFAULT_DEAL } });
    }
  }

  render() {
    return (
      <form className="NewDealForm">
        <div className="NewDealForm--div">
          <label className="NewDealForm--label">Institution:
            <input
              className="NewDealForm--input"
              ref="institution"
              value={this.state.deal.institution}
              placeholder="LS Credit Union"
              onChange={(e) => this.propertyUpdater(e, 'institution')}
              required
            />
          </label>

        </div>
        <div>
          <label className="NewDealForm--error">{this.state.errors.institution}</label>
        </div>
        <div>
          <label className="NewDealForm--label">Deal Type:
            <input
              className="NewDealForm--input"
              ref="dealType"
              value={this.state.deal.dealType}
              placeholder="Consumer Auto"
              onChange={(e) => this.propertyUpdater(e, 'dealType')}
              required
            />
          </label>

        </div>
        <div>
          <label className="NewDealForm--error">{this.state.errors.dealType}</label>
        </div>
        <div>
          <label className="NewDealForm--label">Deal Size:
            <input
              className="NewDealForm--input"
              ref="dealSize"
              value={this.state.deal.dealSize}
              placeholder="$1,000,000"
              onChange={(e) => this.propertyUpdater(e, 'dealSize')}
              required
            />
          </label>

        </div>
        <div>
          <label className="NewDealForm--error">{this.state.errors.dealSize}</label>
        </div>
        <button className="NewDealForm--button" onClick={this.createDeal}>Create Deal</button>
      </form>
    );
  }
};

export default DealForm;
