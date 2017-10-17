import { connect } from 'react-redux';
import DealsTable from '../components/DealsTable';

const mapStateToProps = state => {
  const { deals, error } = state;
  return {
    deals,
    error
  };
};

export default connect(mapStateToProps)(DealsTable);
