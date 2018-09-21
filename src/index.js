import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MovingBox from './MovingBox';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MovingBox />, document.getElementById('root'));
registerServiceWorker();
