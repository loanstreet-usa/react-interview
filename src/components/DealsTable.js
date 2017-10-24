import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DealsTableRow from '../containers/DealsTableRowWithDispatch';

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
  handleClickSort = (event) => {
    this.props.onSortDeals(this.props.deals);
  }

  render() {
    const { deals } = this.props;
    const dealsTableRows = deals.map(deal => <DealsTableRow key={deal.id} deal={deal} deals={deals} />);
    return(
      <div onClick={this.handleClickSort}>
        <table className="DealsTable">
          <thead>
            <tr>
              <th className="DealsTable--headerCell">Institution</th>
              <th className="DealsTable--headerCell">Deal Type</th>
              <th className="DealsTable--headerCell">Deal Size</th>
              <th className="DealsTable--headerCell">Is Published?</th>
              <th className="DealsTable--headerCell"></th>
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
