import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from '../../components/app';
import reducers from '../../reducers';

let store = createStore(reducers);

render(<Provider store={store}>
    <App />
</Provider>, window.document.querySelector('#app-container'));

if (module.hot) module.hot.accept();
