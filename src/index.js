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
    <Router basename={`${process.env.PUBLIC_URL}`}>
        <App />
    </Router>
</Provider>,
document.getElementById('root'));

if (module.hot) {
    module.hot.accept();
}

registerServiceWorker();