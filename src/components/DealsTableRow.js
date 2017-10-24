import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteDeal, publishDeal } from '../actions';

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

  handleDeleteDeal = (id) => {
    this.props.deleteDeal(id);
  }

  render() {
    const { deal: { institution, dealType, dealSize, isPublished, id } } = this.props;
    return (
      <tr className="DealsTableRow">
        <td className="DealsTableRow--cell">{institution}</td>
        <td className="DealsTableRow--cell">{dealType}</td>
        <td className="DealsTableRow--cell">{currencyAmountToString(dealSize)}</td>
        <td className="DealsTableRow--cell">{isPublished ? 'Yes' :
          <div>
            No
            <span className='publishDeal' onClick={() => this.props.handlePublishDeal(id)}>Publish</span>
          </div>}</td>
        <td className="DealsTableRow--cell"><div className='removeDeal' onClick={() => this.handleDeleteDeal(id)}>x</div></td>
      </tr>
    )
  }
}

export default connect(null, { deleteDeal, publishDeal })(DealsTableRow);
