import { connect } from 'react-redux';
import { createDeal, deleteDeal } from '../actions';
import NewDealForm from '../components/NewDealForm';
import DealsTableRow from '../components/DealsTableRow';

const mapDispatchToProps = dispatch => {
  return {
    onCreateDeal: deal => dispatch(createDeal(deal)),
    onDeleteDeal: id => dispatch(deleteDeal(id))
  };
};

// export connect(undefined, mapDispatchToProps)(DealsTableRow);
export default connect(undefined, mapDispatchToProps)(NewDealForm, DealsTableRow);
