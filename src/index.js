import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StateContextProvider } from './context/StateContextProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StateContextProvider>
    <React.StrictMode>
   
      <App />

    </React.StrictMode>
  </StateContextProvider>
);


