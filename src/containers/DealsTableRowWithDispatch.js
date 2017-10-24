import { connect } from 'react-redux';
import { deleteDeal, publishDeal } from '../actions';
import DealsTableRow from '../components/DealsTableRow';

const mapDispatchToProps = dispatch => {
  return {
    onDeleteDeal: id => dispatch(deleteDeal(id)),
    onPublishDeal: id => dispatch(publishDeal(id))
  };
};

export default connect(undefined, mapDispatchToProps)(DealsTableRow);
