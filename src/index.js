import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './sass/index.scss'
import BlobBlue from './components/BlobBlue';
import BlobYellow from './components/BlobYellow';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BlobYellow />
    <BlobBlue />
    <App />
  </React.StrictMode>
);