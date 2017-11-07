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
    }).isRequired,
    onRemoveDeal: PropTypes.func.isRequired,
  }

  render() {
    const { deal: { institution, dealType, dealSize, isPublished } } = this.props;
    return (
      <tr className="DealsTableRow">
        <td
          className="DealsTableRow--cell"
          onClick={this.invokeRemoveDeal}
          >x</td>
        <td className="DealsTableRow--cell">{institution}</td>
        <td className="DealsTableRow--cell">{dealType}</td>
        <td className="DealsTableRow--cell">{currencyAmountToString(dealSize)}</td>
        <td className="DealsTableRow--cell">{isPublished ? 'Yes' : 'No'}</td>
      </tr>
    )
  }
  invokeRemoveDeal = () => {
    this.props.onRemoveDeal(this.props.deal);
  }
}

export default DealsTableRow;
