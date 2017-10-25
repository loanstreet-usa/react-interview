export const CREATE_DEAL = 'CREATE_DEAL';
export const SORT_DEALS = 'SORT_DEALS';

export function createDeal(deal) {
  return {
    type: CREATE_DEAL,
    payload: {
      deal
    }
  }
}

export function sortDeals(sortCriteria) {
  return {
    type: SORT_DEALS,
    payload: {
      sortCriteria
    }
  }
}
