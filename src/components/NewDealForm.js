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
  state = { ...DEFAULT_DEAL, error: null };

  propertyUpdater(property) {
    return e => this.setState({[property]: e.target.value});
  }

  createDeal = () => {
    if (this.props.onCreateDeal)
      this.props.onCreateDeal({ ...this.state });

    // Reset state for the next deal input.
    this.setState({ ...DEFAULT_DEAL });
  }
  handleClick = e => {
    e.preventDefault();
    if (!this.state.institution || !this.state.dealType || !this.state.dealSize) {
      this.setState({error: 'Missing Field.'});
      return;
    }
    if (this.state.institution.match(/\W/)){
      this.setState({error: 'Institution must be a string.'});
      return;
    }
    if (this.state.dealType.match(/\W/)){
      this.setState({error: 'Deal Type must be a string.'});
      return;
    }
    if (this.state.dealSize.match(/\D/)) {
      this.setState({error: 'Deal Size must be an integer.'});
      return;
    }
    this.createDeal();
  }
  render() {
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
        <button
          className="NewDealForm--button"
          onClick={this.handleClick}>
          Create Deal
        </button>
      </form>
      <div>{
        (this.state.error) ? this.state.error : ''
      }</div>
    </div>
    );
  }
};

export default DealForm;
