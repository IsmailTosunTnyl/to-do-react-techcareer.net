import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {store} from './Redux/store';
import { Provider } from 'react-redux';
import { fetchTodos } from './Redux/todoSlicer';


const root = ReactDOM.createRoot(document.getElementById('root'));
store.dispatch(fetchTodos());
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider >
  </React.StrictMode>
);


