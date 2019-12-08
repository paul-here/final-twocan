import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ApiServiceService } from './api-service';
import { Router } from '@angular/router';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(public restApi: ApiServiceService, public router: Router,private http: HttpClient) { }

  authenticate(username, password)
  {
    let returnDisp;
    if(username != "admin")
    {
      const params = new HttpParams()
      .append('password', password)
      .append('userID', username);
      this.http.post<Boolean>('http://twocan-zuul.us-east-2.elasticbeanstalk.com/users/login', {params}).subscribe(data => {
        alert(data);
        returnDisp = data;
      })
      if(returnDisp == true)
      {
        sessionStorage.setItem('username', username);
      }
    }
    else
    {
      returnDisp = this.checkAdmin(username, password); 
    }
    return returnDisp;
  }

  checkAdmin(username, password)
  {
    let temp;
    const params = new HttpParams()
      .append('password', password)
      .append('userID', username);
      this.http.post<Boolean>('http://twocan-zuul.us-east-2.elasticbeanstalk.com/users/login?' + 'password=' + password + '&' +'userID='+username, {params}).subscribe(data => {
        //alert(data);
        temp = data;
      })
      if(temp == true)
      {
        sessionStorage.setItem('admin', username);
      }
      return temp;
  }

  /*authenticate(username,password){
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
  }*/
  isUserLoggedIn(){
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)

  }
  isAdminLoggedIn(){
    let admin = sessionStorage.getItem('admin')
    console.log(!(admin === null))
    return !(admin === null)
  }
  logout(){
    sessionStorage.removeItem('username');
  }
}
