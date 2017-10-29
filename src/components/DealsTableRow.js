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
    selectionReason: PropTypes.oneOf(['remove', 'publish', '']).isRequired,
    onSelectDeal: PropTypes.func.isRequired,
  }

  static defaultProps = {
    onSelectDeal: noop,
  }

  state = { pubCellText: this.props.deal.isPublished ? 'Yes' : 'No' };

  componentWillReceiveProps = (nextProps) => {
    // this operation is performed to update pubCellText after a deal has been published.
    if (nextProps.deal.isPublished && this.state.pubCellText === 'No') this.setState({ pubCellText : 'Yes' });
  }

  markForRemoval = e => {
    if (this.props.selectionReason === '') {
      this.props.onSelectDeal(this.props.deal, 'remove');
    }
  }

  markForPublication = e => {
    if (!this.props.deal.isPublished && this.props.selectionReason === '') {
      this.setState({ pubCellText : 'No' });
      this.props.onSelectDeal(this.props.deal, 'publish');
    }
  }

  mouseEnterPubCell = e => {
    if (!this.props.deal.isPublished && this.props.selectionReason === '') {
      this.setState({ pubCellText : 'Publish Now?' });
    }
  }
  mouseLeavePubCell = e => {
    if (!this.props.deal.isPublished && this.props.selectionReason === '') {
      this.setState({ pubCellText : 'No' });
    }
  }

  render() {
    const { deal: { institution, dealType, dealSize, isPublished } } = this.props;
    const isDealSelected = this.props.selectionReason !== '';

    // add special CSS class to "isPublished?"" cells of deals not yet published.
    const pubCssClass = isPublished || isDealSelected ? '' : 'DealsTableRow--notPublished';
    return (
      <tr className="DealsTableRow">
        <td className="DealsTableRow--cell">{institution}</td>
        <td className="DealsTableRow--cell">{dealType}</td>
        <td className="DealsTableRow--cell">{currencyAmountToString(dealSize)}</td>
        <td className={'DealsTableRow--cell ' + pubCssClass}
          onMouseEnter={this.mouseEnterPubCell}
          onMouseLeave={this.mouseLeavePubCell}
          onClick={this.markForPublication}>
          {this.state.pubCellText}
        </td>
        <td className="DealsTableRow--cell DealsTableRow--RemoveBtn" onClick={this.markForRemoval}>X</td>
      </tr>
    )
  }
}

export default DealsTableRow;
