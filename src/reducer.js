import { CREATE_DEAL, DELETE_DEAL } from './actions';

var nextDealId = 3;

const initialState = {
  deals: [
    {
      id: 1,
      institution: 'LS Credit Union',
      dealSize: '1000000',
      dealType: 'Consumer Auto',
      isPublished: true,
    },
    {
      id: 2,
      institution: 'LS Credit Union',
      dealSize: '5000000',
      dealType: 'Real Estate',
      isPublished: false,
    }
  ],
  error: ""
};

export default (state = initialState, { type, payload }) => {
  switch(type) {
    case CREATE_DEAL:
      let error = ""
      const newDeal = payload.deal;
      if ( !newDeal.institution || !newDeal.dealType || !newDeal.dealSize ) {
        error += "All fields are required. "
      }
      if ( isNaN(newDeal.dealSize) ) {
        error += "Deal size must be a number. "
      }
      if (error) {
        return { ...state, error: error };
      }
      return { ...state, deals: [ ...state.deals, { ...newDeal, id: nextDealId++ } ], error: error };
    case DELETE_DEAL:
      return { ...state, deals: state.deals.filter( deal => deal.id !== payload.key ) }
    default:
      return state;
  }
}
