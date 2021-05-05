import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
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
import Selectevent from '../Selectors/events';
import { useDispatch } from 'react-redux';
import { addEventToStore } from '../actions/events';
import { db } from '../firebase';
export const history = createHistory();
const AppRouter = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) =>
    Selectevent(state.events, state.filters)
  );
  const titles = events.map((e) => e.title);
  const fetchEvents = async () => {
    const res = await db.collection(`Clubs/ACM/Events`).get();
    res.docs.forEach((item) => {
      const event = item.data();
      if (event && !titles.includes(event.title)) {
        dispatch(addEventToStore(event));
      }
    });
  };
  useEffect(() => {
    fetchEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
