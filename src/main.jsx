import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {UserContext} from './hooks/Context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContext>
        <App/>
      </UserContext>
    </BrowserRouter>
  </React.StrictMode>
);