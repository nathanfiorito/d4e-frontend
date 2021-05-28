// import { Router } from "react-router";

// import Routes from './routes';

// import 'bootstrap/dist/css/bootstrap.min.css';

// export default function App(){
//     return (
//         <Router>
//             <Routes />
//         </Router>
//     )
// }


import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from './services/auth';

import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Home from './pages/Home/Home';
import Survey from './pages/Survey/Survey';

import 'bootstrap/dist/css/bootstrap.min.css';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );

export default function App(){
    console.log(isAuthenticated())
    return(
        <BrowserRouter>
        <Switch>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/signin' exact={true} component={Login}/>
            <Route path='/signup' exact={true} component={SignUp}/>
            <PrivateRoute path='/survey' component={Survey}/>
        </Switch>
    </BrowserRouter>
    )
}