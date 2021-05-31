import {Route, Redirect } from 'react-router-dom'
import Auth from '../services/auth'

const auth = new Auth();

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        auth.isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/signin", state: { from: props.location } }} />
        )
      }
    />
  );

export default PrivateRoute;