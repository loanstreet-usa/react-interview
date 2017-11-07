import { CREATE_DEAL, REMOVE_DEAL, SORT_DEALS } from './actions';

var nextDealId = 3;

const initialState = {
  deals: [{
      id: 1,
      institution: 'LS Credit Union',
      dealSize: '1000000',
      dealType: 'Consumer Auto',
      isPublished: true,
    }
    ,
    {
      id: 2,
      institution: 'LS Credit Union',
      dealSize: '5000000',
      dealType: 'Real Estate',
      isPublished: false,
    }
  ],
  sortField: 'institution',
  reverseSort: false,
};

export default (state = initialState, { type, payload }) => {
  switch(type) {
    case CREATE_DEAL:
      return { ...state, deals: [ ...state.deals, { ...payload.deal, id: nextDealId++ } ] };
    case REMOVE_DEAL:
      return {...state, deals: state.deals.filter(x => x.id !== payload.deal.id)};
    case SORT_DEALS:
      let res = handleSort(state, payload);
      return sortArray(res);
    default:
      return state;
  }
}

function handleSort(state, payload) {

  // if field change, set ascending
  if (payload.sortField !== state.sortField) {
    return {...state, sortField: payload.sortField, reverseSort: false};
  }
  // if no field change, reverse order
  return  {...state, reverseSort: !state.reverseSort}; 
}

function sortArray(state) {
  let sorted = state.deals.filter(x => x).sort((a, b) => {
      if (a[state.sortField] < b[state.sortField]) {
        return state.reverseSort ? 1 : -1;
      }
      if (a[state.sortField] > b[state.sortField]) {
        return state.reverseSort ? -1 : 1;
      }

      return 0;
  })

  return {...state, deals: sorted};
}