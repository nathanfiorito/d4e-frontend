import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'
import Home from './pages/Home/Home'
import Survey from './pages/Survey/Survey';

// import { isAuthenticated } from "./services/auth";

// function PrivateRoute ({component: Component, ...rest}) {
//     <Route {...rest} 
//         render={props =>
//             isAuthenticated() ? (
//                 <Component {...props}/>
//             ) : (
//                 <Redirect to={{ pathname: '/', state: {from: props.location }}}/>
//             )
//         }
//     />
// }

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/signin' exact={true} component={Login}/>
                <Route path='/signup' exact={true} component={SignUp}/>
                <Route path='/survey' component={Survey}/>
                <Route path='/' exact={true} component={Home}/>
            </Switch>
        </BrowserRouter>
    )
}