import { CREATE_DEAL, DELETE_DEAL, PUBLISH_DEAL, SORT_DEALS } from './actions';

let nextDealId = 3;
let reverse = true;

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

const publish = (deal,id) => {
  if (deal.id !== id)
    return deal;
  return {...deal,isPublished: true};
}

const sortByField = (deals,field) => {
  reverse = !reverse
  return deals.slice().sort( (a, b) => {
    if (isNaN(a[field]))
      return (a[field] > b[field]) === reverse
    return  (parseFloat(a[field]) > parseFloat(b[field])) === reverse
  })
}


export default (state = initialState, { type, payload }) => {
  switch(type) {
    case CREATE_DEAL:
      return { ...state, deals: [ ...state.deals, { ...payload.deal, id: nextDealId++ }]};
    case DELETE_DEAL:
      return { ...state, deals: [ ...state.deals.filter(deal => deal.id !== payload)]};
    case PUBLISH_DEAL:
      return { ...state, deals: [ ...state.deals.map(deal => publish(deal, payload))]};
    case SORT_DEALS:
      return { ...state, deals: sortByField(state.deals, payload) };
    default:
      return state;
  }
}
