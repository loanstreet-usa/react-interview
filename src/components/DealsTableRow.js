import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RemoveDealModal from './RemoveDealModal'

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

  state = {
    modalIsOpen: false
  }


  render() {
    const { deal: { institution, dealType, dealSize, isPublished } } = this.props;
    return (
      <tr className="DealsTableRow">
        <td className="DealsTableRow--cell">{institution}</td>
        <td className="DealsTableRow--cell">{dealType}</td>
        <td className="DealsTableRow--cell">{currencyAmountToString(dealSize)}</td>
        <td className="DealsTableRow--cell">{isPublished ? 'Yes' : 'No'}</td>
        <td className="DealsTableRow--cell DealsTableRow--remove" onClick={() => this.setState({ modalIsOpen: true })}>X</td>
        <RemoveDealModal deal={this.props.deal} isOpen={this.state.modalIsOpen} closeModal={() => this.setState({ modalIsOpen: false })}></RemoveDealModal>
      </tr>

    )
  }
}

export default DealsTableRow;
