import { connect } from 'react-redux';
import DealsTable from '../components/DealsTable';
import { removeDeal, publishDeal } from '../actions';

const mapStateToProps = state => {
  const { deals } = state;
  return {
    deals
  };
};

const mapDispatchToProps = (dispatch) =>{

  return {
    removeDeal: function(deal) { dispatch(removeDeal(deal));},
    publishDeal: function(deal) { dispatch(publishDeal(deal));}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(DealsTable);
