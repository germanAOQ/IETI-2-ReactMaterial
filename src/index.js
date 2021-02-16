import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Login} from './components/Login'
import TodoApp from './components/TodoApp'

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
