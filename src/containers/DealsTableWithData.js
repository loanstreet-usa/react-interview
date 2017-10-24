import { connect } from 'react-redux';
import { publishDeal, deleteDeal, sortDeals } from '../actions';
import DealsTable from '../components/DealsTable';

const mapStateToProps = state => {
  const { deals } = state;
  return {
    deals
  };
};


const mapDispatchToProps = dispatch => {
  return {
    onDeleteDeal: index => dispatch(deleteDeal(index)),
    onPublishDeal: deal => dispatch(publishDeal(deal)),
    onSortDeals: deal => dispatch(sortDeals(deal))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DealsTable);
