import {ACTION_INPUT,GET_HEARDER_LIST,START_HOST_LIST,OFF_HOST_LIST,CHANGE_HOT_LIST} from './actionType'
import axios from 'axios';
import {fromJS} from 'immutable';
const actionListValue=(data)=>{
    return {
        type:GET_HEARDER_LIST,
        value:fromJS(data)
    }
}
const changeHotListValue=(option)=>{
    return {
        type:CHANGE_HOT_LIST,
        value:option
    }
}
export const searchFocus=()=>{
    return {
        type:ACTION_INPUT,
        value:true
    }
}
export const searchFocusoff=()=>{
    return {
        type:ACTION_INPUT,
        value:false
    }
}
export const getHearderList=()=>{
    return (dispatch)=>{
        axios.get('/api/hearderList.json').then((res)=>{
            dispatch(actionListValue(res.data))
        }).catch((error)=>{
            console.log(error);
        })
    }
}
//开启热搜
export const searchHotStart = ()=>{
    return {
        type:START_HOST_LIST
    }
}
//关闭热搜
export const searchHotOff = ()=>{
    return {
        type:OFF_HOST_LIST
    }
}
//换一批
export const changePageHotWord = (optionInex)=>{
    const newIndex = optionInex+1
    return (dispatch)=>{
        dispatch(changeHotListValue(newIndex))
    }
}