import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './sass/index.scss'
import Blob_blue from './components/Blob_blue';
import Blob_yellow from './components/Blob_yellow';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Blob_yellow />
    <Blob_blue />
    <App />
  </React.StrictMode>
);