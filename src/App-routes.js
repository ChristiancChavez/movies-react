import React from 'react';
import {Route, Switch} from 'react-router-dom';
import BlackPanther from './black-panther.js';
import Superman from './superman.js';
import Deadpool from './Deadpool.js';
import App from './App.js';

const AppRoutes = () => {
    return (
        <App>
            <Switch>
                <Route exact path='/Superman' component={Superman} /> 
                <Route exact path='/Deadpool' component={Deadpool} /> 
                <Route exact path='/Black Panther' component={BlackPanther} /> S
            </Switch>
        </App>
    );
}
export default AppRoutes;