import React, { Component } from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

import DealsTableRow from './DealsTableRow';

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
    onSortDeals: PropTypes.func,
    onDeleteDeal: PropTypes.func
  }

  static defaultProps = {
    onSortDeals: noop
  }

  sortDeals = e => {
    e.preventDefault();
    const { sorttype, sortorder, sortname } = e.target.dataset;
    if (this.props.onSortDeals)
      this.props.onSortDeals(sorttype, sortorder, sortname)
  }

  render() {
    const { deals, onDeleteDeal } = this.props;
    const dealsTableRows = deals.map(deal => <DealsTableRow onDeleteDeal={onDeleteDeal} key={deal.id} deal={deal} />);
    return(
      <div>
        <table className="DealsTable">
          <thead>
            <tr>
              <th className="DealsTable--headerCell">Institution</th>
              <th className="DealsTable--headerCell">Deal Type</th>
              <th className="DealsTable--headerCell">Deal Size</th>
              <th className="DealsTable--headerCell" data-sorttype="number" data-sortorder="" data-sortname="institution" onClick={this.sortDeals}>Is Published?</th>
              <th className="DealsTable--headerCell">Actions</th>
            </tr>
          </thead>
          <tbody>
            {dealsTableRows}
          </tbody>
        </table>
      </div>
    );
  }
}

export default DealsList;
