import React, { Component } from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

class DealsTableHeaderCell extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sortActive: this.props.sortActive
    }
  }

  static propTypes = {
    sortType: PropTypes.string,
    sortOrder: PropTypes.string,
    sortName: PropTypes.string,
    sortActive: PropTypes.bool,
    label: PropTypes.string,
    onSortDeals: PropTypes.func
  }

  static defaultProps = {
    onSortDeals: noop
  }

  sortDeals = e => {
    e.preventDefault();
    const { sortType, sortOrder, sortName, onSortDeals } = this.props
    if (onSortDeals)
      onSortDeals(sortType, sortOrder, sortName)
    this.setState({sortActive: true})
  }

  sortableCell = () => {
    if (this.state.sortType) {
      return <th className="DealsTable--headerCell" onClick={this.sortDeals}>
        {this.label}
      </th>
    } else {
      return <th className="DealsTable--headerCell">{this.label}</th>
    }
  }

  render() {
    return this.sortableCell();
  }

}

export default DealsTableHeaderCell;

