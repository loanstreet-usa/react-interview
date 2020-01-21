import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DealsTableRowWithDispatch from '../containers/DealsTableRowWithDispatch';

import './DealsTable.css';

const dealPropName = {
  institution: "Institution",
  dealType: "Deal Type",
  dealSize: "Deal Size",
  isPublished: "Is Published?"
}

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
    sort: PropTypes.shape({
      by: PropTypes.string.isRequired,
      order: PropTypes.string.isRequired
    }).isRequired
  }


  render() {
    const { deals, onSortDeals, sort } = this.props;
    const dealsTableRows = deals.map(deal => <DealsTableRowWithDispatch key={deal.id} deal={deal} />);
    return (
      <div>
        <table className="DealsTable">
          <thead>
            <tr>
              {Object.keys(dealPropName).map((name) => {
                return <th className="DealsTable--headerCell" onClick={() => onSortDeals(name, sort.by === name && sort.order ? false : true)}>
                  <span>{dealPropName[name]}</span>
                  <span className="DealsTable--sortOrder">{sort.by === name ? (sort.order ? '▲' : '▼') : ''}</span>
                </th>
              })
              }
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
