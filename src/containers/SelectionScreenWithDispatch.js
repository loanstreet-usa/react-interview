import { connect } from 'react-redux';
import { removeDeal, publishDeal, cancelSelection } from '../actions';
import SelectionScreen from '../components/SelectionScreen';

const mapStateToProps = state => {
  const { selectedDeal, selectionReason } = state;
  return {
    selectedDeal,
    selectionReason
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRemoveDeal: deal => dispatch(removeDeal(deal)),
    onPublishDeal: deal => dispatch(publishDeal(deal)),
    onCancelSelection: deal => dispatch(cancelSelection(deal)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectionScreen);
