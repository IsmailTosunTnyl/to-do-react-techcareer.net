import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {store} from './Redux/store';
import { Provider } from 'react-redux';
import { fetchTodos,allTodos } from './Redux/todoSlicer';


const root = ReactDOM.createRoot(document.getElementById('root'));
store.dispatch(fetchTodos()).then(() => store.dispatch(allTodos()));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider >
  </React.StrictMode>
);


