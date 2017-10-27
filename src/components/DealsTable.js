import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DealsTableRow from './DealsTableRow';
import SelectionScreenWithDispatch from '../containers/SelectionScreenWithDispatch';

import './DealsTable.css';

class DealsList extends Component {
  static propTypes = {
    deals: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        institution: PropTypes.string.isRequired,
        dealSize: PropTypes.string.isRequired,
        dealType: PropTypes.string.isRequired,
        isPublished: PropTypes.bool.isRequired
      })
    ).isRequired,
    selectionReason: PropTypes.oneOf(['remove', 'publish', '']).isRequired
  }

  sortDeals = e => {
    const sortCriteria = e.target.firstChild.nodeValue;
    this.props.onSortDeals(sortCriteria);
  }

  render() {
    const { deals, onSelectDeal, selectionReason } = this.props;
    const dealsTableRows = deals.map(deal => <DealsTableRow
      key={deal.id}
      deal={deal}
      selectionReason={selectionReason}
      onSelectDeal={onSelectDeal}/>
    );
    return(
      <div>
        <table className="DealsTable">
          <thead>
            <tr>
              <th className="DealsTable--headerCell" onClick={this.sortDeals}>Institution</th>
              <th className="DealsTable--headerCell" onClick={this.sortDeals}>Deal Type</th>
              <th className="DealsTable--headerCell" onClick={this.sortDeals}>Deal Size</th>
              <th className="DealsTable--headerCell" onClick={this.sortDeals}>Is Published?</th>
              <th className="DealsTable--headerCell">Remove Deal</th>
            </tr>
          </thead>
          <tbody>
            {dealsTableRows}
          </tbody>
        </table>
        {(this.props.selectionReason !== '') && <SelectionScreenWithDispatch />}
      </div>
    );
  }
}

export default DealsList;
