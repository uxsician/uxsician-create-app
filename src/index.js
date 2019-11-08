import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import GlobalStyle from './assets/styles';

import store from './store';
import App from './containers/App';

ReactDOM.render(
    <BrowserRouter>
        <>
            <Provider store={store}>
                <App />
            </Provider>
            <GlobalStyle />
        </>
    </BrowserRouter>,
    document.getElementById('root')
);
