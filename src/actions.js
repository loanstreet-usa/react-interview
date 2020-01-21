export const CREATE_DEAL = 'CREATE_DEAL';
export const REMOVE_DEAL = 'REMOVE_DEAL';

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