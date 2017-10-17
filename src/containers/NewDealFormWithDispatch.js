import { connect } from 'react-redux';
import { createDeal } from '../actions';
import NewDealForm from '../components/NewDealForm';

const mapDispatchToProps = dispatch => {
  return {
    onCreateDeal: deal => {
      var warning = "";
      if(deal.institution.length === 0) warning += "Please input an institution. \n";
      if(deal.dealType.length === 0 ) warning += "Please input a deal type. \n";
      if(deal.dealSize.length ===0 || isNaN(deal.dealSize)) warning += "Please input a number for deal size. \n";
      if(warning) {
        alert(warning);
      }
      else dispatch(createDeal(deal))
    }
  };
};

export default connect(undefined, mapDispatchToProps)(NewDealForm);
