import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import Store from './store/store';
import { BrowserRouter as Router} from 'react-router-dom'

const storeInstance = Store();

ReactDOM.render(
<Provider store={storeInstance}>
    <Router>
        <App />
    </Router>
</Provider>,
document.getElementById('root'));
registerServiceWorker();