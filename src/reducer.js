import { CREATE_DEAL } from './actions';
import { SORT_DEALS } from './actions';
import { DELETE_DEAL } from './actions';
import { PUBLISH_DEAL } from './actions';

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
    case SORT_DEALS:
      return { ...state, deals: sortDeals(state.deals) };
    case DELETE_DEAL:
      return { ...state, deals: [...state.deals].filter((e) => e.id !== payload.id) };
    case PUBLISH_DEAL:
      return { ...state, deals: publish(payload.id, state.deals) };
    default:
      return state;
  }
}


function sortDeals([...deals]) {
  return deals.sort((a,b) => {
    return a.institution.localeCompare(b.institution);
  })
}

function publish(id, [...deals]) {
  deals[id-1].isPublished = !deals[id-1].isPublished;
  return deals;
}
