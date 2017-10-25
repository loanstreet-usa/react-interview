import { CREATE_DEAL } from './actions';
import { SORT_DEALS } from './actions';

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

const sortDeals = (state, sortCriteria) => {
  const deals = state.deals;
  switch(sortCriteria) {
    case 'Institution':
      return wordSort(deals, 'institution');
    case 'Deal Type':
      return wordSort(deals, 'dealType');
    case 'Deal Size':
      return numSort(deals, 'dealSize');
    case 'Is Published?':
      return wordSort(deals, 'isPublished');
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

const numSort = (deals, sortCriteria) => {
  return deals.sort((dealA, dealB)=>{
    return dealA[sortCriteria] - dealB[sortCriteria];
  })
}

export default (state = initialState, { type, payload }) => {
  switch(type) {
    case CREATE_DEAL:
      return { ...state, deals: [ ...state.deals, { ...payload.deal, id: nextDealId++ } ] };
    case SORT_DEALS:
      const sortedDeals = sortDeals(state, payload.sortCriteria);
      return { ...state, deals: [...sortedDeals] };
    default:
      return state;
  }
}
