import noop from 'lodash/noop';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './DealsTableRow.css';

function currencyAmountToString(amount) {
  return '$' + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

class DealsTableRow extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    deal: PropTypes.shape({
      id: PropTypes.number.isRequired,
      institution: PropTypes.string.isRequired,
      dealType: PropTypes.string.isRequired,
      dealSize: PropTypes.string.isRequired,
      isPublished: PropTypes.bool.isRequired,
    }).isRequired,
  };

  static defaultProps = {
    onClick: noop,
  };

  clickHandler = e => {
    e.preventDefault();
    if (this.props.onClick && this.props.deal.id) {
      this.props.onClick(this.props.deal.id);
    }
  };

  render() {
    const {
      deal: { institution, dealType, dealSize, isPublished },
    } = this.props;
    return (
      <tr className="DealsTableRow" onClick={this.clickHandler}>
        <td className="DealsTableRow--cell">{institution}</td>
        <td className="DealsTableRow--cell">{dealType}</td>
        <td className="DealsTableRow--cell">
          {currencyAmountToString(dealSize)}
        </td>
        <td className="DealsTableRow--cell">{isPublished ? 'Yes' : 'No'}</td>
      </tr>
    );
  }
}

export default DealsTableRow;
