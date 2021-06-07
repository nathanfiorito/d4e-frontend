import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Home from './pages/Home/Home';
import SurveyList from './pages/SurveyList/SurveyList';
import CreateSurvey from './pages/CreateSurvey/CreateSurvey';
import CreateVoteOption from './pages/CreateVoteOption/CreateVoteOption';
import Survey from './pages/Survey/Survey';

import PrivateRoute from './hooks/PrivateRouter'
import AuthRoute from './hooks/AuthRoute'

export default function Routes(){
    return (
        <BrowserRouter>
        <Switch>
            <Route path='/' exact={true} component={Home}/>
            <AuthRoute path='/signin' exact={true} component={Login}/>
            <AuthRoute path='/signup' exact={true} component={SignUp}/>
            <PrivateRoute path='/surveys' exact={true} component={SurveyList}/>
            <PrivateRoute path='/survey/create' exact={true} component={CreateSurvey}/>
            <PrivateRoute path='/survey/:surveyId' exact={true} component={Survey}/>
            <PrivateRoute path='/survey/:surveyId/create/vote-option' exact={true} component={CreateVoteOption}/>
            <PrivateRoute path='/survey/:surveyId/vote-option/:voteOptionId' exact={true} component={<div>Olá</div>}/>
        </Switch>
    </BrowserRouter>
    )
}