import { connect } from 'react-redux';
import { createDeal } from '../actions';
import NewDealForm from '../components/NewDealForm';

const mapDispatchToProps = dispatch => {
  return {
    onCreateDeal: deal => dispatch(createDeal(deal)),
  };
};

export default connect(undefined, mapDispatchToProps)(NewDealForm);
