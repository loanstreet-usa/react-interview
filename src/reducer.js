import { CREATE_DEAL, REMOVE_DEAL, PUBLISH_DEAL } from './actions';

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

export default (state = initialState, { type, payload }) => {
  switch(type) {
    case CREATE_DEAL:
      return { ...state, deals: [ ...state.deals, { ...payload.deal, id: nextDealId++ } ] };
    case REMOVE_DEAL:
      var deals = state.deals;
      var toRemove = payload.deal;
      var ret = deals.filter(x=> x.id!=toRemove.id);
        return{...state, deals: ret }
    case PUBLISH_DEAL:
        var deals = state.deals;
        var toUpdate = payload.deal;
        console.log(toUpdate);
        var ret = deals.map(x=>{
          if(x.id === toUpdate.id){
            var res = x;
            res.isPublished=true;
            return res;
          }else return x;
        });
        return{...state, deals: ret }
    default:
      return state;
  }
}
