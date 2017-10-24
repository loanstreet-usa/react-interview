import { CREATE_DEAL, DELETE_DEAL, PUBLISH_DEAL } from './actions';

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
  ]
};

export default (state = initialState, { type, payload }) => {
  switch(type) {
    case CREATE_DEAL:
      return { ...state, deals: [ ...state.deals, { ...payload.deal, id: nextDealId++ } ] };
    case DELETE_DEAL:
      return { ...state, deals: state.deals.filter(deal => deal.id != payload.id) };
    case PUBLISH_DEAL:
      let newDeals = [ ...state.deals ];
      newDeals.splice(state.deals.findIndex(deal => deal.id == payload.deal.id), 1, payload.deal)
      return { ...state, deals: newDeals };
    default:
      return state;
  }
}
