import { CREATE_DEAL, REMOVE_DEAL } from './actions';


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
  switch (type) {
    case CREATE_DEAL:
      return { ...state, deals: [...state.deals, { ...payload.deal, id: nextDealId++ }] };
    case REMOVE_DEAL:
      return { ...state, deals: state.deals.filter((deal) => deal.id !== payload.id) }
    default:
      return state;
  }
}
