import {
  CREATE_DEAL,
  SELECT_DEAL,
  SORT_DEALS,
  REMOVE_DEAL,
  PUBLISH_DEAL,
  CANCEL_SELECTION
} from './actions';

var nextDealId = 3;

export const initialState = {
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
  selectedDeal: {
    id: 0,
    institution: '',
    dealSize: '',
    dealType: '',
    isPublished: false,
  },
  selectionReason: ''
};

const sortDeals = (deals, sortCriteria) => {
  switch(sortCriteria) {
    case 'Institution':
      return wordSort(deals, 'institution');
    case 'Deal Type':
      return wordSort(deals, 'dealType');
    case 'Deal Size':
      return numSort(deals, 'dealSize');
    case 'Is Published?':
      return booleanSort(deals, 'isPublished');
    default:
      return deals;
  }
}

const wordSort = (deals, sortCriteria) => {
  return deals.sort((dealA, dealB)=>{
    const criteriaA = dealA[sortCriteria].toLowerCase()
    const criteriaB = dealB[sortCriteria].toLowerCase()
    if(criteriaA < criteriaB){
      return -1;
    } else if (criteriaA > criteriaB) {
      return 1;
    } else {
      return 0;
    }
  })
}

const booleanSort = (deals, sortCriteria) => {
  return deals.sort((dealA, dealB)=>{
    const criteriaA = dealA[sortCriteria].toString()
    const criteriaB = dealB[sortCriteria].toString()
    if(criteriaA < criteriaB){
      return 1;
    } else if (criteriaA > criteriaB) {
      return -1;
    } else {
      return 0;
    }
  })
}

const numSort = (deals, sortCriteria) => {
  return deals.sort((dealA, dealB)=>{
    return dealA[sortCriteria] - dealB[sortCriteria];
  })
}

const updateDealsForRemoval = (deals, dealToBeRemoved) => {
  return deals.reduce((remainingDeals, currentDeal) => {
    if (currentDeal !== dealToBeRemoved) remainingDeals.push(currentDeal);
    return remainingDeals;
  },[]);
}

const updateDealsForPublication = (deals, dealToBePublished) => {
  return deals.map((deal)=>{
    return deal === dealToBePublished ? {...deal, isPublished: true} : deal;
  });
}

export default (state = initialState, { type, payload }) => {
  switch(type) {
    case CREATE_DEAL:
      return { ...state, deals: [ ...state.deals, { ...payload.deal, id: nextDealId++ } ] };
    case SELECT_DEAL:
      return { ...state, selectedDeal: payload.selectedDeal, selectionReason: payload.reason };
    case SORT_DEALS:
      const sortedDeals = sortDeals([...state.deals], payload.sortCriteria);
      return { ...state, deals: sortedDeals };
    case REMOVE_DEAL:
      return {
        deals: updateDealsForRemoval(state.deals, payload.deal),
        selectedDeal: { ...initialState.selectedDeal },
        selectionReason: '',
      };
    case PUBLISH_DEAL:
      return {
        deals: updateDealsForPublication(state.deals, payload.deal),
        selectedDeal: { ...initialState.selectedDeal },
        selectionReason: ''
      };
    case CANCEL_SELECTION:
      return { ...state, selectedDeal: {...initialState.selectedDeal}, selectionReason: ''};
    default:
      return state;
  }
}
