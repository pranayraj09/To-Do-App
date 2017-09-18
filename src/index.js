import React from 'react';
import ReactDOM from 'react-dom';
import Home from './containers/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();