import {ACTION_INPUT,GET_HEARDER_LIST,START_HOST_LIST,OFF_HOST_LIST,CHANGE_HOT_LIST} from './actionType';
import {fromJS} from 'immutable';

//immutable库
//immutable对象

const defalutValue = fromJS({
    actionSearch:false,
    hearderList:[],
    hotInerCont:false,
    hotOutCont:true,
    hasHotList:false,
    hotListIndex:1,
    hotListpage:10
})
export default (state=defalutValue,action)=>{
    switch(action.type){
        case ACTION_INPUT:
            return  state.set('actionSearch',action.value);
        case GET_HEARDER_LIST:
            return state.set("hearderList",action.value).set('hasHotList',true);
        case START_HOST_LIST:
            return  state.set("hotInerCont",true);
        case OFF_HOST_LIST:
            return  state.set('hotInerCont',false);
        case CHANGE_HOT_LIST:
            return  state.set('hotListIndex',action.value);
        default:
         return state;
    }
    
}
