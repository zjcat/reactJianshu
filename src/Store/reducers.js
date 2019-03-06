import {combineReducers} from 'redux-immutable';
import HeaderReducers from '../common/header/store/reducers';

export default combineReducers({
    header:HeaderReducers
})