import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Importando os STYLES
import './styles/global/global.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
