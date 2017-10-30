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
  state = { ...DEFAULT_DEAL };

  propertyUpdater(property) {
    return e => this.setState({[property]: e.target.value});
  }

  createDeal = e => {
    e.preventDefault();

    const fields = ['institution', 'dealType', 'dealSize'];

    const isValid = fields.every(x => typeof this.state[x] === 'string' && this.state[x].trim().length > 0);

    if (!isValid) return;

    if (this.props.onCreateDeal)
      this.props.onCreateDeal({ ...this.state, isPublished: true });

    // Reset state for the next deal input.
    this.setState({ ...DEFAULT_DEAL });

    console.error(this.state);
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
    );
  }
};

export default DealForm;
