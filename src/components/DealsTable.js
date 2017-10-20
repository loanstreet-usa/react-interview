import React, { Component } from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

import DealsTableRow from './DealsTableRow';
import DealsTableHeaderCell from './DealsTableHeaderCell';

import './DealsTable.css';

class DealsTable extends Component {
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

  render() {
    const { deals, onDeleteDeal, onSortDeals } = this.props;
    const dealsTableRows = deals.map(deal => <DealsTableRow onDeleteDeal={onDeleteDeal} key={deal.id} deal={deal} />);
    return(
      <div>
        <table className="DealsTable">
          <thead>
            <tr>
              <DealsTableHeaderCell sortType="string" sortOrder="" sortName="institution" onSortDeals={onSortDeals} label="Institution" />
              {/*
              <th className="DealsTable--headerCell" data-sorttype="string" data-sortorder="" data-sortname="dealType" onClick={this.sortDeals}>Deal Type</th>
              <th className="DealsTable--headerCell" data-sorttype="float" data-sortorder="" data-sortname="dealSize" onClick={this.sortDeals}>Deal Size</th>
              <th className="DealsTable--headerCell" data-sorttype="boolean" data-sortorder="" data-sortname="isPublished" onClick={this.sortDeals}>Is Published?</th>
              <th className="DealsTable--headerCell">Actions</th>
              */}
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

export default DealsTable;
