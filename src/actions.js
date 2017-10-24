export const CREATE_DEAL = 'CREATE_DEAL';
export const DELETE_DEAL = 'DELETE_DEAL';
export const PUBLISH_DEAL = 'PUBLISH_DEAL';
export const SORT_DEALS = 'SORT_DEALS';

export function createDeal(deal) {
  return {
    type: CREATE_DEAL,
    payload: {
      deal
    }
  }
}

export function deleteDeal(id) {
  return {
    type: DELETE_DEAL,
    payload: id
  }
}

export function publishDeal(id) {
  return {
    type: PUBLISH_DEAL,
    payload: id
  }
}


export function sortDeals(field) {
  return {
    type: SORT_DEALS,
    payload: field
  }
}