export const CREATE_DEAL = 'CREATE_DEAL';
export const DELETE_DEAL = 'DELETE_DEAL';

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
    payload: {
      id
    }
  }
}
