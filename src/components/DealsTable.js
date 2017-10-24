import React, { Component } from 'react';

import DealsTableRow from './DealsTableRow';

import PropTypes from 'prop-types';

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
    ).isRequired
  }

  render() {

    const { deals } = this.props;
    const dealsTableRows = deals.map((deal) =>  <DealsTableRow deleteDeal={() => this.props.onDeleteDeal(deal.id)} publishDeal={() => this.props.onPublishDeal(deal.id)} key={deal.id} deal={deal} />);

    return(
      <div>
        <table className="DealsTable">
          <thead>
            <tr>
              <th onClick={() => this.props.onSortDeals('institution')} className="DealsTable--headerCell">Institution</th>
              <th onClick={() => this.props.onSortDeals('dealType')} className="DealsTable--headerCell">Deal Type</th>
              <th onClick={() => this.props.onSortDeals('dealSize')} className="DealsTable--headerCell">Deal Size</th>
              <th onClick={() => this.props.onSortDeals('isPublished')} className="DealsTable--headerCell">Is Published?</th>
              <th className="DealsTable--headerCell">Remove</th>
              <th className="DealsTable--headerCell">Publish</th>
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
