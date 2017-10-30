import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = state => {
  return { selectionReason: state.selectionReason };
};

export default connect(mapStateToProps, null)(App);
