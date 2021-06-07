import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes';

export default function App(){
    return(
        <Routes/>
    //     <BrowserRouter>
    //     <Switch>
    //         <Route path='/' exact={true} component={Home}/>
    //         <AuthRoute path='/signin' exact={true} component={Login}/>
    //         <AuthRoute path='/signup' exact={true} component={SignUp}/>
    //         <PrivateRoute path='/surveys' exact={true} component={SurveyList}/>
    //         <PrivateRoute path='/survey/create' exact={true} component={CreateSurvey}/>
    //         <PrivateRoute path='/survey/:surveyId' exact={true} component={Survey}/>
    //         <PrivateRoute path='/survey/:surveyId/create/vote-option' exact={true} component={CreateVoteOption}/>
    //     </Switch>
    // </BrowserRouter>
    )
}