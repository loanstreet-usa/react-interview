export const CREATE_DEAL = 'CREATE_DEAL';
export const REMOVE_DEAL = 'REMOVE_DEAL';
export const PUBLISH_DEAL = 'PUBLISH_DEAL';

export function createDeal(deal) {
  return {
    type: CREATE_DEAL,
    payload: {
      deal
    }
  }
}

export function removeDeal(deal){
    return {
        type: REMOVE_DEAL,
        payload: {
            deal
        }
    }
}

export function publishDeal(deal){
  return {
    type: PUBLISH_DEAL,
      payload:{
      deal
      }
  }
}
