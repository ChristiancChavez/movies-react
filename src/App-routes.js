import React from 'react';
import {Route, Switch} from 'react-router-dom';
import BlackPanther from './Components/black-panther.js';
import Superman from './Components/superman.js';
import Deadpool from './Components/Deadpool.js';
import App from './Components/App.js';

const AppRoutes = () => {
    return (
        <App>
            <Switch>
                <Route exact path='/Superman' component={Superman} /> 
                <Route exact path='/Deadpool' component={Deadpool} /> 
                <Route exact path='/Black Panther' component={BlackPanther} /> 
                <Route exact path='Black Panther' component={BlackPanther} />
            </Switch>
        </App>
    );
}
export default AppRoutes;