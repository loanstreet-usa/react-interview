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

  markForRemoval = e => {
    this.props.onSelectDeal(this.props.deal, 'remove');
  }

  markForPublication = e => {
    if (!this.props.deal.isPublished) {
      this.props.onSelectDeal(this.props.deal, 'publish');
    }
  }

  render() {
    const { deal: { institution, dealType, dealSize, isPublished } } = this.props;
    return (
      <tr className="DealsTableRow">
        <td className="DealsTableRow--cell">{institution}</td>
        <td className="DealsTableRow--cell">{dealType}</td>
        <td className="DealsTableRow--cell">{currencyAmountToString(dealSize)}</td>
        <td className="DealsTableRow--cell DealsTableRow--publishBtn" onClick={this.markForPublication}>{isPublished ? 'Yes' : 'No'}</td>
        <td className="DealsTableRow--cell DealsTableRow--RemoveBtn" onClick={this.markForRemoval}>X</td>
      </tr>
    )
  }
}

export default DealsTableRow;
