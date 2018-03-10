import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Router from './router/router';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
