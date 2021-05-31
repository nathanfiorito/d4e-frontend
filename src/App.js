import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PrivateRoute from './hooks/PrivateRouter'

import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Home from './pages/Home/Home';
import SurveyList from './pages/SurveyList/SurveyList';
import CreateSurvey from './pages/CreateSurvey/CreateSurvey';
import Survey from './pages/Survey/Survey';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function App(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/signin' exact={true} component={Login}/>
            <Route path='/signup' exact={true} component={SignUp}/>
            <PrivateRoute path='/surveys' exact={true} component={SurveyList}/>
            <PrivateRoute path='/surveys/:id' exact={true} component={Survey}/>
            <PrivateRoute path='/create/surveys' exact={true} component={CreateSurvey}/>
        </Switch>
    </BrowserRouter>
    )
}