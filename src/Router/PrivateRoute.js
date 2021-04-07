import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { firebase } from './../firebase';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        firebase.auth().currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect to='/' />
        )
      }
    />
  );
};

export default PrivateRoute;
