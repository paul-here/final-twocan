import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(username,password){
    if(username === "Jorge" && password === "password"){
      sessionStorage.setItem('username',username)
      return true;
    }
    else{
      return false;
    }
  }
  isUserLoggedIn(){
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)

  }
  logout(){
    sessionStorage.removeItem('username');
  }
}
