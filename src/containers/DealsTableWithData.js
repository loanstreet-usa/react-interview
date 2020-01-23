import { connect } from 'react-redux';
import { deleteDeal } from '../actions';
import DealsTable from '../components/DealsTable';

const mapStateToProps = state => {
  const { deals } = state;
  return {
    deals
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDeleteDeal: deal => dispatch(deleteDeal(deal)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DealsTable);
