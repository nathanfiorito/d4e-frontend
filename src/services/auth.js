import {api} from './api';
import jwt from 'jsonwebtoken';

async function signIn(username, password){
  // if(isAuthenticated()) return;
  api.post('auth/signin',{
    username: username,
    password: password
  }).then((res) => {
    localStorage.setItem('accessToken', res.data.accessToken)
  })

  return new Promise((resolve, reject) => {
    const token = getAccessToken();
    if(token){
      resolve({message: 'success'})
    }
    else{
      reject({message: 'failed'})
    }
  })
}

function getAccessToken() {
  return localStorage.getItem('accessToken');
}

function removeAccessToken() {
  localStorage.removeItem('accessToken');
}

function isAuthenticated (){
  const token = getAccessToken();
  if(!token){
    return false;
  }
   
  var decodedToken = jwt.decode(token, {complete: true});
  var dateNow = new Date();

  if(decodedToken.payload.exp < dateNow.getTime()){
    return true;
  } else {
    removeAccessToken();
    return false;
  }
}

export {signIn, getAccessToken, removeAccessToken, isAuthenticated}