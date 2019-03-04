import {ACTION_INPUT} from '../../../Store/actionType'
const defalutValue = {
    actionSearch:false
}
export default (state=defalutValue,action)=>{
    const newState = JSON.parse(JSON.stringify(state));
    if(action.type===ACTION_INPUT){
        newState.actionSearch = action.value
    }
    return newState;
}