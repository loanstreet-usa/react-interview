import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { deleteDeal } from '../actions';
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
    console.error(this.props);
    const { deals } = this.props;
    const dealsTableRows = deals.map(deal => <DealsTableRow key={deal.id} deal={deal}  onDelete={() => this.onDelete(deal.id)} />);
    return(
      <div>
        <table className="DealsTable">
          <thead>
            <tr>
              <th className="DealsTable--headerCell">Institution</th>
              <th className="DealsTable--headerCell">Deal Type</th>
              <th className="DealsTable--headerCell">Deal Size</th>
              <th className="DealsTable--headerCell">Is Published?</th>
              <th className="DealsTable--headerCell">Action</th>
            </tr>
          </thead>
          <tbody>
            {dealsTableRows}
          </tbody>
        </table>
      </div>
    );
  }

  onDelete = (id) => {
    const { dispatch } = this.props;
    dispatch(deleteDeal(id))
  }
}

export default DealsList;
