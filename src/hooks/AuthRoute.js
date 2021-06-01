import { Route, Redirect } from 'react-router-dom'
import { isAuthenticated } from '../services/auth'

const AuthRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
            <Redirect to={{ pathname: "/surveys", state: { from: props.location } }} />
        ) : (
            <Component {...props} />
        )
      }
    />
  );

export default AuthRoute;