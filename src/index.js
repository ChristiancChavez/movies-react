import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './Stylesheets/main.css';
import { Router } from 'react-router-dom';
import AppRoutes from './App-routes.js';

ReactDOM.render(
    <Router>
        <AppRoutes />
    </Router>
, document.getElementById('root'));
registerServiceWorker();
