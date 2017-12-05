import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import Main from './js/main';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Main />, document.getElementById('container'));
registerServiceWorker();
