import React, { Component } from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

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
    }).isRequired,
    onDeleteDeal: PropTypes.func
  }

  static defaultProps = {
    onDeleteDeal: noop
  }

  deleteDeal = e => {
    e.preventDefault();

    if (this.props.onDeleteDeal)
      this.props.onDeleteDeal(this.props.deal.id);
  }

  render() {
    const { deal: { institution, dealType, dealSize, isPublished } } = this.props;
    return (
      <tr className="DealsTableRow">
        <td className="DealsTableRow--cell">{institution}</td>
        <td className="DealsTableRow--cell">{dealType}</td>
        <td className="DealsTableRow--cell">{currencyAmountToString(dealSize)}</td>
        <td className="DealsTableRow--cell">{isPublished ? 'Yes' : 'No'}</td>
        <td className="DealsTableRow--cell"><button className="NewDealForm--button" onClick={this.deleteDeal}>Delete</button></td>
      </tr>
    )
  }
}

export default DealsTableRow;
