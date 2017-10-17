import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './DealsTableRow.css';

function currencyAmountToString(amount) {
  return "$" + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

class DealsTableRow extends Component {
  static propTypes = {
    deal: PropTypes.shape({
      institution: PropTypes.string.isRequired,
      dealType: PropTypes.string.isRequired,
      dealSize: PropTypes.string.isRequired,
      isPublished: PropTypes.bool.isRequired,
        removeDeal: PropTypes.func.isRequired,
    }).isRequired
  }



  render() {
    const { deal, removeDeal, publishDeal } = this.props;
    return (
      <tr className="DealsTableRow">
        <td className="DealsTableRow--cell">{deal.institution}</td>
        <td className="DealsTableRow--cell">{deal.dealType}</td>
        <td className="DealsTableRow--cell">{currencyAmountToString(deal.dealSize)}</td>
        <td className="DealsTableRow--cell">{deal.isPublished ? 'Yes' : 'No'}</td>
          <td className="DealsTableRow--cell">
              <button onClick={()=>{removeDeal(deal)}}>Remove</button>
          </td>
          <td className="DealsTableRow--cell">
              <button onClick={()=>{publishDeal(deal)}}  disabled={deal.isPublished}>Publish</button>
          </td>
      </tr>
    )
  }
}

export default DealsTableRow;
