import { connect } from 'react-redux';
import { sortDeals, selectDeal } from '../actions';
import DealsTable from '../components/DealsTable';

const mapStateToProps = state => {
  const deals = state.selectedDeal.institution === '' ? state.deals : [state.selectedDeal];
  return {
    deals,
    selectionReason: state.selectionReason
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSortDeals: sortCriteria => dispatch(sortDeals(sortCriteria)),
    onSelectDeal: (selectedDeal, reason) => dispatch(selectDeal(selectedDeal, reason))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DealsTable);
