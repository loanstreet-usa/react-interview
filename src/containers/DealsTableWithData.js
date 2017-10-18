import { connect } from 'react-redux';
import { sortDeals, deleteDeal } from '../actions';
import DealsTable from '../components/DealsTable';

const mapDispatchToProps = dispatch => {
  return {
    onSortDeals: (sorttype, sortorder, sortname) => dispatch(sortDeals(sorttype, sortorder, sortname)),
    onDeleteDeal: id => dispatch(deleteDeal(id))
  };
};

const mapStateToProps = state => {
  const { deals } = state;
  return {
    deals
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DealsTable);
