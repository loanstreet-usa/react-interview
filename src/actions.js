export const CREATE_DEAL = 'CREATE_DEAL';
export const DELETE_DEAL = 'DELETE_DEAL';
export const SORT_DEALS = 'SORT_DEALS';

export function createDeal(deal) {
  return {
    type: CREATE_DEAL,
    payload: {
      deal
    }
  }
}

export function deleteDeal(key) {
  return {
    type: DELETE_DEAL,
    payload: {
      key
    }
  }
}

export function sortDeals(sortorder, sortname) {
  return {
    type: SORT_DEALS,
    payload: {
      sortorder,
      sortname
    }
  }
}
