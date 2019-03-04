import {combineReducers} from 'redux';
import HeaderReducers from '../common/header/store/reducers';

export default combineReducers({
    header:HeaderReducers
})