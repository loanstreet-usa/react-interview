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
    }).isRequired,
    selectionReason: PropTypes.oneOf(['remove', 'publish', '']).isRequired
  }

  state = { isPublishedText: this.props.deal.isPublished ? 'Yes' : 'No' };

  markForRemoval = e => {
    if (this.props.selectionReason === '') {
      this.props.onSelectDeal(this.props.deal, 'remove');
    }
  }

  markForPublication = e => {
    if (!this.props.deal.isPublished && this.props.selectionReason === '') {
      this.setState({isPublishedText : 'No'})
      this.props.onSelectDeal(this.props.deal, 'publish');
    }
  }

  mouseEnter = e => {
    if (!this.props.deal.isPublished && this.props.selectionReason === '') {
      this.setState({isPublishedText : 'Publish Now?'})
    }
  }
  mouseLeave = e => {
    if (!this.props.deal.isPublished && this.props.selectionReason === '') {
      this.setState({isPublishedText : 'No'})
    }
  }

  render() {
    const { deal: { institution, dealType, dealSize, isPublished } } = this.props;
    const isDealAlreadySelected = this.props.selectionReason !== '';
    const publicationStatusClass = isPublished || isDealAlreadySelected ? '' : 'DealsTableRow--notPublished';
    const isPublishedText = isPublished ? 'Yes' : this.state.isPublishedText;
    return (
      <tr className="DealsTableRow">
        <td className="DealsTableRow--cell">{institution}</td>
        <td className="DealsTableRow--cell">{dealType}</td>
        <td className="DealsTableRow--cell">{currencyAmountToString(dealSize)}</td>
        <td className={'DealsTableRow--cell ' + publicationStatusClass}
          onMouseEnter={this.mouseEnter}
          onMouseLeave={this.mouseLeave}
          onClick={this.markForPublication}>
          {isPublishedText}
        </td>
        <td className="DealsTableRow--cell DealsTableRow--RemoveBtn" onClick={this.markForRemoval}>X</td>
      </tr>
    )
  }
}

export default DealsTableRow;
