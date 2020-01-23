import React, { Component } from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

import DealsTableRow from './DealsTableRow';

import './DealsTable.css';

class DealsList extends Component {
  static propTypes = {
    onDeleteDeal: PropTypes.func.isRequired,
    deals: PropTypes.arrayOf(
      PropTypes.shape({
        institution: PropTypes.string.isRequired,
        dealSize: PropTypes.string.isRequired,
        dealType: PropTypes.string.isRequired,
        isPublished: PropTypes.bool.isRequired,
      })
    ).isRequired,
  };

  static defaultProps = {
    onDeleteDeal: noop,
  };

  deleteDeal = id => {
    if (this.props.onDeleteDeal && id) {
      this.props.onDeleteDeal(id);
    }
  };

  render() {
    const { deals } = this.props;
    const dealsTableRows = deals.map(deal => (
      <DealsTableRow onClick={this.deleteDeal} key={deal.id} deal={deal} />
    ));
    return (
      <div>
        <table className="DealsTable">
          <thead>
            <tr>
              <th className="DealsTable--headerCell">Institution</th>
              <th className="DealsTable--headerCell">Deal Type</th>
              <th className="DealsTable--headerCell">Deal Size</th>
              <th className="DealsTable--headerCell">Is Published?</th>
            </tr>
          </thead>
          <tbody>{dealsTableRows}</tbody>
        </table>
      </div>
    );
  }
}

export default DealsList;
