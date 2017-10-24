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


function inputAmount(amount) {
  return amount.replace('$', "").replace(',', "");
}


class DealForm extends Component {
  static propTypes = {
    onCreateDeal: PropTypes.func
  }

  static defaultProps = {
    onCreateDeal: noop
  }

  // State represents a deal.
  state = { 
    error: false,
    deal : { ...DEFAULT_DEAL }
  };

  propertyUpdater(property) {
    return e => this.setState({ ...this.state, deal: { ...this.state.deal, [property]: e.target.value } });
  }


  checkErrors(deal){
    if (deal.institution.length ===  0)
      return 'insert a institution'
    
    if (deal.dealType.length === 0)
      return 'insert a deal type'
    
    if (deal.dealSize.length === 0)
      return 'insert a number'
    
    if (isNaN(inputAmount(deal.dealSize)))
      return 'insert a valid number'      
    
    return false
  }

  createDeal = e => {
    e.preventDefault();
    let error = this.checkErrors(this.state.deal)

    if (this.props.onCreateDeal && !error)
      this.props.onCreateDeal({ ...this.state.deal });

    this.setState({ ...this.state,  deal: DEFAULT_DEAL, 'error': error});
  }



  render() {
    let error = 
      <div className="NewDealForm--error">
        <label className="NewDealForm--label">{this.state.error}</label>
      </div>
    if (!this.state.error)
      error = <div className="NewDealForm--noerror"/>
    return (
      <form className="NewDealForm">
        {error}
        <div className="NewDealForm--div">
          <label className="NewDealForm--label">Institution:
            <input
              className="NewDealForm--input"
              ref="institution"
              value={this.state.deal.institution}
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
              value={this.state.deal.dealType}
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
              value={this.state.deal.dealSize}
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
