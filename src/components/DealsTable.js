import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DealsTableRow from './DealsTableRow';
import DealsHeader from './DealsHeader';
import './DealsTable.css';


const headers = [
  { title: "Institution", value: "institution" },
  { title: "Deal Type", value: "dealType" },
  { title: "Deal Size", value: "dealSize" },
  { title: "Is Published?", value: "isPublished" },
]

class DealsList extends Component {
  static propTypes = {
    sortField: PropTypes.string.isRequired,
    reverseSort: PropTypes.bool.isRequired,
    deals: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        institution: PropTypes.string.isRequired,
        dealSize: PropTypes.string.isRequired,
        dealType: PropTypes.string.isRequired,
        isPublished: PropTypes.bool.isRequired,
        onRemoveDeal: PropTypes.func,
        onSortDeals: PropTypes.func,
      })
    ).isRequired
  }

  render() {
    const { deals } = this.props;
    const dealsTableRows = deals.map(deal => <DealsTableRow key={deal.id} deal={deal} onRemoveDeal={this.props.onRemoveDeal} />);
    return (
      <div>
        <table className="DealsTable">
          <thead>
            <tr>
              <th className="DealsTable--headerCell"></th>
              {headers.map(x => <DealsHeader
                key={x.value}
                {...x}
                isSortField={this.props.sortField === x.value}
                onSort={this.props.onSortDeals} />)}
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
