import React from 'react';
import createHistory from 'history/createBrowserHistory';
import {Router, Switch,Route} from 'react-router-dom';
import Landing from '../components/Landing Page/Landing';
import Dashboard from '../components/Dashboard/dashboard'
import NotFoundPage from '../components/NotFoundPage/NotFoundPage';
export const history = createHistory();
const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
            <Route path="/" component={Landing} exact={true}/>
            <Route path='/home' component={Dashboard} />
            <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
)
export default AppRouter;