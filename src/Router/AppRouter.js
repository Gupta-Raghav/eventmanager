import React, { useEffect } from 'react';
import createHistory from 'history/createBrowserHistory';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from '../components/Landing Page/Landing';
import Dashboard from '../components/Dashboard/dashboard';
import Events from '../components/Events/Events';
import NotFoundPage from '../components/NotFoundPage/NotFoundPage';
import UserProvider from '../components/providers/UserProvider';
import UpcomingEvents from '../components/Events/UpcomingEvents';
import Profile from '../components/Profile/profile';
import CreateEventForm from '../components/CreateEventForm/EventForm';
import YourEvents from '../components/YourEvents/YourEvents';
import Faculty from '../components/Faculty/Faculty';
import Admin from '../components/Admin/Admin';
import { firebase } from './../firebase';
import PrivateRoute from './PrivateRoute';
import FacultyRoute from './FacultyRoute';
import AdminRoute from './AdminRoute';
export const history = createHistory();
const AppRouter = () => {
  useEffect(() => {
    localStorage.setItem(
      'logged_in',
      firebase.auth().currentUser ? true : false
    );
  }, []);
  return (
    <UserProvider>
      <Router history={history}>
        <div>
          <Switch>
            <Route path='/' component={Landing} exact={true} />
            <PrivateRoute path='/home' component={Dashboard} />
            <PrivateRoute path='/events' component={Events} />
            <PrivateRoute path='/upcoming' component={UpcomingEvents} />
            <PrivateRoute path='/createevent' component={CreateEventForm} />
            <PrivateRoute path='/yourEvent' component={YourEvents} />
            <PrivateRoute path='/profile' component={Profile} />
            <FacultyRoute path='/organizer' component={Faculty} />
            <AdminRoute path='/admin' component={Admin} />
            {/* <Route path='/preview' component={Profile} /> */}
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    </UserProvider>
  );
};
export default AppRouter;
