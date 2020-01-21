import { connect } from 'react-redux';
import { sortDeals } from '../actions'
import DealsTable from '../components/DealsTable';

const mapStateToProps = state => {
  const { deals, sort } = state;
  return {
    deals, sort
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSortDeals: (by, order) => dispatch(sortDeals(by, order))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DealsTable);


