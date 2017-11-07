export const CREATE_DEAL = 'CREATE_DEAL';
export const REMOVE_DEAL = 'REMOVE_DEAL';
export const SORT_DEALS = 'SORT_DEALS';

export function createDeal(deal) {
  return {
    type: CREATE_DEAL,
    payload: {
      deal
    }
  }
}


export function removeDeal(deal) {
  return {
    type: REMOVE_DEAL,
    payload: {
      deal
    }
  }
}

export function sortDeals(sortField) {
  return {
    type: SORT_DEALS,
    payload: {
      sortField
    }
  }
}