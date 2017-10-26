export const CREATE_DEAL = 'CREATE_DEAL';
export const SELECT_DEAL = 'SELECT_DEAL';
export const SORT_DEALS = 'SORT_DEALS';
export const REMOVE_DEAL = 'REMOVE_DEAL';
export const PUBLISH_DEAL = 'PUBLISH_DEAL';
export const CANCEL_SELECTION = 'CANCEL_SELECTION';

export function createDeal(deal) {
  return {
    type: CREATE_DEAL,
    payload: {
      deal
    }
  }
}

export function selectDeal(selectedDeal, reason) {
  return {
    type: SELECT_DEAL,
    payload: {
      selectedDeal,
      reason
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

export function removeDeal(deal) {
  return {
    type: REMOVE_DEAL,
    payload: {
      deal
    }
  }
}

export function publishDeal(deal) {
  return {
    type: PUBLISH_DEAL,
    payload: {
      deal
    }
  }
}

export function cancelSelection() {
  return {
    type: CANCEL_SELECTION
  }
}
