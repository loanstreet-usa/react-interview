import { connect } from 'react-redux';
import { createDeal } from '../actions';
import NewDealForm from '../components/NewDealForm';

const mapDispatchToProps = dispatch => {
  return {
    onCreateDeal: deal => dispatch(createDeal(deal))
  };
};

const mapStateToProps = state => {
  const { error } = state;
  return {
    error
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewDealForm);
