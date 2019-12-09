import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(username,password){
    if(username == "Jorge" && password == "password"){
      sessionStorage.setItem('username',username)
      let key = username;
      //localStorage.setItem(key,this.username);
      return true;
    }
    else{
      return false;
    }
  }
  checkAdmin(username,password){
    if(username === "admin" && password === "admin"){
      sessionStorage.setItem('username',username)

      return true;
    }
    else{
      return false;
    }
  }
  isUserLoggedIn(){
    let user = sessionStorage.getItem('username')
    //console.log(!(user == null))
    return !(user === null)

  }
  isAdminLoggedIn(){
    let admin = sessionStorage.getItem('username')
    //console.log(!(admin == null))
    return !(admin === null)
  }
  logout(){
    sessionStorage.removeItem('username');
  }
}
