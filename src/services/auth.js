import {api} from './api';

export default class Auth{
  signIn(username, password){
    api.post('auth/signin',{
      username: username,
      password: password
    }).then((res) => {
      localStorage.setItem('accessToken', res.data.accessToken)
    })
  }

  isAuthenticated (){
    if(localStorage.getItem('accessToken')) return true;
    else return false;
  }
}