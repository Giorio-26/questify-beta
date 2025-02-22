import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '/App';
import './index.css'; // თუ გაქვს სტილის ფაილი

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
