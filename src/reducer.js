import { CREATE_DEAL, DELETE_DEAL, SORT_DEALS } from './actions';

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

const getDealSortCompare = (sorttype, sortorder, sortname) => {
  if (sorttype === "number") {
    if (sortorder === "asc" || !sortorder) {
      return ( a, b ) => a[sortname].localeCompare(b[sortname]);
    } else {
      return ( a, b ) => b[sortname].localeCompare(a[sortname]);
    }
  } else {
    if (sortorder === "asc" || !sortorder) {
      return ( a, b ) => parseFloat(a[sortname]) - parseFloat(b[sortname])
    } else {
      return ( a, b ) => parseFloat(b[sortname]) - parseFloat(a[sortname])
    }
  }
}

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
    case SORT_DEALS:
      const { sorttype, sortorder, sortname } = payload
      let compare = getDealSortCompare(sorttype, sortorder, sortname)
      const myDeals = state.deals.sort(compare)
      console.log(myDeals);
      return { ...state, myDeals }

    default:
      return state;
  }
}
