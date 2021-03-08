import React from 'react';
import createHistory from 'history/createBrowserHistory';
import { Router, Switch, Route } from 'react-router-dom';
import Landing from '../components/Landing Page/Landing';
import Dashboard from '../components/Dashboard/dashboard';
import Events from '../components/Events/Events';
import NotFoundPage from '../components/NotFoundPage/NotFoundPage';
import UserProvider from '../components/providers/UserProvider';
import UpcomingEvents from '../components/Events/UpcomingEvents';
export const history = createHistory();
const AppRouter = () => (
  <UserProvider>
    <Router history={history}>
      <div>
        <Switch>
          <Route path='/' component={Landing} exact={true} />
          <Route path='/home' component={Dashboard} />
          <Route path='/events' component={Events} />
          <Route path='/upcoming' component={UpcomingEvents} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  </UserProvider>
);
export default AppRouter;
