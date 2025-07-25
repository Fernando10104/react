import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter> {/* Usamos HashRouter para GitHub Pages */}
      <App />
    </HashRouter>
  </React.StrictMode>
);
