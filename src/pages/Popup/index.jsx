import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from '../../components/app';
import { store } from '../../app/store';

render(<Provider store={store}>
    <App />
</Provider>, window.document.querySelector('#app-container'));

if (module.hot) module.hot.accept();
