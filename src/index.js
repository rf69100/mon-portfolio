import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ComingSoon from './ComingSoon';
import reportWebVitals from './reportWebVitals';

// Routing simple basé sur le pathname
const getComponent = () => {
  const path = window.location.pathname;
  if (path === '/coming-soon' || path === '/coming-soon/') {
    return <ComingSoon />;
  }
  return <App />;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {getComponent()}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
