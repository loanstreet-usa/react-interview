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

  publish = _ => {
    this.props.deal.isPublished = !this.props.deal.isPublished;
    this.setState({...DealsTableRow});
  }

  deleteDeal = e => {
    if (this.props.onDeleteDeal) {
        this.props.onDeleteDeal(e);
        this.setState({ ...DealsTableRow });
    }
  }

  render() {
    const { deal: { institution, dealType, dealSize, isPublished } } = this.props;
    return (
      <tr className="DealsTableRow">
        <td className="DealsTableRow--cell">{institution}</td>
        <td className="DealsTableRow--cell">{dealType}</td>
        <td className="DealsTableRow--cell">{currencyAmountToString(dealSize)}</td>
        <td className="DealsTableRow--cell">{isPublished ? 'Yes' : 'No'}</td>
        <td className="DealsTableRow--cell" onClick={this.publish}>{'Click to Publish/Unpublish'}</td>
        <td className="DealsTableRow--cell" onClick={() => this.deleteDeal(this.props.deal.id)}>{'Click to Delete'}</td>
      </tr>
    )
  }
}

export default DealsTableRow;
