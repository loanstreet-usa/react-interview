import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DealsHeader extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        isSortField: PropTypes.bool.isRequired,
        onSort: PropTypes.func.isRequired,
    }
    render() {
        return (
            <th
                className="DealsTable--headerCell"
                onClick={this.invokeSort}
            >
                {this.sortIndicator()}
                {this.props.title}
            </th>
        );
    }
    invokeSort = () => {
        this.props.onSort(this.props.value);
    }
    sortIndicator() {
        return this.props.isSortField ? <span>*</span> : null;
    }
}

export default DealsHeader;