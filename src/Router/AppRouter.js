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
import { firebase } from './../firebase';
export const history = createHistory();
const AppRouter = () => {
  useEffect(() => {
    localStorage.setItem(
      'logged_in',
      firebase.auth().currentUser ? true : false
    );
    // console.log(firebase.auth().currentUser);
  }, []);
  return (
    <UserProvider>
      <Router history={history}>
        <div>
          <Switch>
            <Route path='/' component={Landing} exact={true} />
            <Route path='/home' component={Dashboard} />
            <Route path='/events' component={Events} />
            <Route path='/upcoming' component={UpcomingEvents} />
            <Route path='/createevent' component={CreateEventForm} />
            <Route path='/yourEvent' component={YourEvents} />
            <Route path='/profile' component={Profile} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    </UserProvider>
  );
};
export default AppRouter;
