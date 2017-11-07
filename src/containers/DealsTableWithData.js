import { connect } from 'react-redux';
// import { dispatch } from 'redux';
import { removeDeal, sortDeals } from '../actions';
import DealsTable from '../components/DealsTable';

const mapStateToProps = state => {
  const { deals, sortField, reverseSort } = state;
  return {
    deals,
    sortField,
    reverseSort,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRemoveDeal: deal => dispatch(removeDeal(deal)),
    onSortDeals: field => dispatch(sortDeals(field)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DealsTable);
