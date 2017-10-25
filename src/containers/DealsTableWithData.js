import { connect } from 'react-redux';
import { sortDeals } from '../actions';
import DealsTable from '../components/DealsTable';

const mapStateToProps = state => {
  const { deals } = state;
  return {
    deals
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sortDeals: sortCriteria => dispatch(sortDeals(sortCriteria))
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(DealsTable);
