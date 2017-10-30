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

  render() {
    const { deals } = this.props;
    const dealsTableRows = deals.map(deal => <DealsTableRow delete={this.delete} key={deal.id} deal={deal} />);
    return(
      <div>
        <table className="DealsTable">
          <thead>
            <tr>
              <th className="DealsTable--headerCell">Institution</th>
              <th className="DealsTable--headerCell">Deal Type</th>
              <th className="DealsTable--headerCell">Deal Size</th>
              <th className="DealsTable--headerCell">Is Published?</th>
              <th className="DealsTable--headerCell">Publish</th>
              <th className="DealsTable--headerCell">Delete</th>
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
