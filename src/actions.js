export const CREATE_DEAL = 'CREATE_DEAL';
export const REMOVE_DEAL = 'REMOVE_DEAL';
export const TOGGLE_PUBLISH_DEAL = "TOGGLE_PUBLISH_DEAL"
export const SORT_DEALS = 'SORT_DEALS'

export function createDeal(deal) {
  return {
    type: CREATE_DEAL,
    payload: {
      deal
    }
  }
}

export function removeDeal(id) {
  return {
    type: REMOVE_DEAL,
    payload: {
      id
    }
  }
}

export function togglePublishDeal(id) {
  return {
    type: TOGGLE_PUBLISH_DEAL,
    payload: {
      id
    }
  }
}

export function sortDeals(by, order) {
  console.log("sorting deals", by, order)
  return {
    type: SORT_DEALS,
    payload: {
      by, order
    }
  }
}