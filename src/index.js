import React from 'react';
import ReactDOM from 'react-dom';
import { Globalstyle } from './style';
import {IconFont} from './statics/iconfont/iconfont'
import App from './App';

const Index = (
    <div>
        <Globalstyle />
        <IconFont/>
        <App />
    </div>
)
ReactDOM.render(Index, document.getElementById('root'));
