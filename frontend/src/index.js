import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App/App';
import ErrorBoundary from './components/ErrorBoundry/ErrorBoundry';
import BackendApi from './services/BackendApi';
import { ApiServiceProvider } from './components/ApiContext/ApiContext';

import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
const api = new BackendApi();

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ErrorBoundary>
                <ApiServiceProvider value={api}>
                    <Router>
                        <App />
                    </Router>
                </ApiServiceProvider>
            </ErrorBoundary>
        </Provider>
    </React.StrictMode>
);
