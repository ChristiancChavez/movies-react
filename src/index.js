import React from 'react';
import ReactDOM from 'react-dom';
//import App from './Components/App';
import registerServiceWorker from './Components/registerServiceWorker';
import './Stylesheets/main.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './App-routes.js';

ReactDOM.render(
    <Router>
        <AppRoutes />
    </Router>
, document.getElementById('root'));
registerServiceWorker();
