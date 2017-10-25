import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    ).isRequired
  }

  sortDeals = e => {
    e.preventDefault();
    const sortCriteria = e.target.firstChild.nodeValue;
    this.props.sortDeals(sortCriteria);
  }

  render() {
    const { deals } = this.props;
    const dealsTableRows = deals.map(deal => <DealsTableRow key={deal.id} deal={deal} />);
    return(
      <div>
        <table className="DealsTable">
          <thead>
            <tr>
              <th className="DealsTable--headerCell" onClick={this.sortDeals}>Institution</th>
              <th className="DealsTable--headerCell" onClick={this.sortDeals}>Deal Type</th>
              <th className="DealsTable--headerCell" onClick={this.sortDeals}>Deal Size</th>
              <th className="DealsTable--headerCell" onClick={this.sortDeals}>Is Published?</th>
              <th className="DealsTable--headerCell" onClick={this.sortDeals}>Remove Deal</th>
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
