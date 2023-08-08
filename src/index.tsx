import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/app';
import reportWebVitals from './reportWebVitals';

import { createStore } from 'redux';
// Корневой редьюсер, который обрабатывает экшены
import { rootReducer } from './services/reducers/root-reducer';
import { Provider } from 'react-redux';

// Инициализируем хранилище с помощью корневого редьюсера
const store = createStore(rootReducer);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Оборачиваем приложение компонентом Provider из пакета react-redux
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
