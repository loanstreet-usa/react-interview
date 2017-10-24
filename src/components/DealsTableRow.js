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
      isPublished: PropTypes.bool.isRequired
    }).isRequired
  }


  render() {
    const { deal: { institution, dealType, dealSize, isPublished } } = this.props;
    const publish = isPublished ? <div/> : <button className="NewDealForm--button" onClick={this.props.publishDeal}>Publish</button>;
    return (
      <tr className="DealsTableRow">
        <td className="DealsTableRow--cell">{institution}</td>
        <td className="DealsTableRow--cell">{dealType}</td>
        <td className="DealsTableRow--cell">{currencyAmountToString(dealSize)}</td>
        <td className="DealsTableRow--cell">{isPublished ? 'Yes' : 'No'}</td>
        <td className="DealsTableRow--cell Cell-button">
          <button className="NewDealForm--button" onClick={this.props.deleteDeal}>X</button>
        </td>
        <td className="DealsTableRow--cell Cell-button">
          {publish}
        </td>
      </tr>
    )
  }
}


export default DealsTableRow;
