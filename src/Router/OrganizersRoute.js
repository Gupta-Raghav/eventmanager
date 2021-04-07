import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { firebase } from '../firebase';

const OrganizersRoute = ({ component: Component, user, ...rest }) => {
  // const user = firebase.auth().currentUser;
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={(props) =>
        // user && user.email === 'karan1501mannan@gmail.com' ? (
        firebase.auth().currentUser &&
        firebase.auth().currentUser.email === 'karan1501mannan@gmail.com' ? (
          <Component {...props} />
        ) : (
          <Redirect to='/' />
        )
      }
    />
  );
};

export default OrganizersRoute;
