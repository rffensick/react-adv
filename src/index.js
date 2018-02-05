// eject
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './mocks/index';

// styles
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
