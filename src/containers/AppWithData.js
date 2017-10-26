import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = state => {
  const { selectedDeal, selectionReason } = state;
  return {
    selectedDeal,
    selectionReason
  };
};

export default connect(mapStateToProps, null)(App);
