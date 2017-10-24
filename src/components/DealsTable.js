import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { publishDeal } from '../actions';

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

  state = { sortBy: 'institution', desc: true };

  handleSort = (field) => {
    this.setState({ sortBy: field, desc: this.state.sortBy == field && this.state.desc == true ? false : true })
  }

  handlePublishDeal = (id) => {
    let deal = this.props.deals.filter(deal => deal.id == id)[0];
    deal.isPublished = true;
    this.props.publishDeal(deal);
  }

  render() {
    const { deals } = this.props;
    const { sortBy, desc } = this.state;
    const dealsTableRows = deals.sort((a, b) =>
      sortBy == 'dealSize' ? Number(b[sortBy]) - Number(a[sortBy]) * (desc ? 1 : -1) :
      typeof(a[sortBy]) == 'string' ? (desc ? a[sortBy].toLowerCase() > b[sortBy].toLowerCase() : a[sortBy].toLowerCase() < b[sortBy].toLowerCase()) :
      (desc ? a[sortBy] < b[sortBy] : a[sortBy] > b[sortBy])
    ).map(deal => <DealsTableRow handlePublishDeal={this.handlePublishDeal} key={deal.id} deal={deal} />);
    return(
      <div>
        <table className="DealsTable">
          <thead>
            <tr>
              <th className="DealsTable--headerCell">
                Institution
                <span className={`sortBy ${sortBy == 'institution' ? 'sorting' : ''}`} onClick={() => this.handleSort('institution')}>
                  {sortBy == 'institution' && !desc ? '^' : 'v'}
                </span>
                </th>
              <th className="DealsTable--headerCell">
                Deal Type
                <span className={`sortBy ${sortBy == 'dealType' ? 'sorting' : ''}`} onClick={() => this.handleSort('dealType')}>
                  {sortBy == 'dealType' && !desc ? '^' : 'v'}
                </span>
                </th>
              <th className="DealsTable--headerCell">
                Deal Size
                <span className={`sortBy ${sortBy == 'dealSize' ? 'sorting' : ''}`} onClick={() => this.handleSort('dealSize')}>
                  {sortBy == 'dealSize' && !desc ? '^' : 'v'}
                </span>
                </th>
              <th className="DealsTable--headerCell">
                Is Published?
                <span className={`sortBy ${sortBy == 'isPublished' ? 'sorting' : ''}`} onClick={() => this.handleSort('isPublished')}>
                  {sortBy == 'isPublished' && !desc ? '^' : 'v'}
                </span>
                </th>
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

const mapStateToProps = ({ deals }) => ({ deals });

export default connect(mapStateToProps, { publishDeal })(DealsList);