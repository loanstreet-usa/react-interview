import { connect } from 'react-redux';
import { sortDeals, deleteDeal } from '../actions';
import DealsTable from '../components/DealsTable';

const mapStateToProps = state => {
  const { deals } = state;
  return {
    deals
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSortDeals: deals => dispatch(sortDeals(deals)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DealsTable);
