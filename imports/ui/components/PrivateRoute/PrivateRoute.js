import React from 'react';
import { connect } from 'react-redux';
import {
  Route,
  Redirect
} from 'react-router-dom';



const PrivateRoute = ({ component: Component, ...rest }) => {
   const authenticated = Meteor.userId();
return (
  <Route
    {...rest}
    render={props => (
      authenticated
        ? <Component {...props} />
        : <Redirect
            to={{
                pathname: '/login',
                state: { from: props.location }
            }}
        />
    )}
  />
);
}


export default PrivateRoute;
