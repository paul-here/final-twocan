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

  checkUser(username, password)
  {
    //let temp;
    const params1 = new HttpParams()
      .append('password', password)
      .append('userID', username);
      this.http.post<any>('http://twocan-zuul.us-east-2.elasticbeanstalk.com/users/login?' + 'password=' + password + '&' +'userID='+username, {params1}).subscribe(data => {
        alert(data);
        if(data === true)
        {
          sessionStorage.setItem('username', username);
        }
        
      })

      // alert(sessionStorage.getItem('username'));
      
      if(sessionStorage.getItem('username') != null)
      {
        return true;
      }
      else
      {
        alert('false again, you fucked up...USER');
        return false;
      }
  }

  checkAdmin(username, password)
  {
    let temp;
    const params = new HttpParams()
      .append('password', password)
      .append('userID', username);
      this.http.post<any>('http://twocan-zuul.us-east-2.elasticbeanstalk.com/users/login?' + 'password=' + password + '&' +'userID='+username, {params}).subscribe(data => {
        //alert(data);
        if(data === true)
        {
          sessionStorage.setItem('admin', username);
        }
      })

      if(sessionStorage.getItem('admin') != null)
      {
        return true;
      }
      else
      {
        //alert('false again, you fucked up...USER');
        return false;
      }
  }

  authenticate(username, password)
  {
    if(username != "admin")
    {
      return this.checkUser(username, password);
    }
    // alert(this.checkAdmin(username, password));
    return this.checkAdmin(username, password);
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('username')
    //console.log(!(user === null))
    return !(user === null)

  }
  isAdminLoggedIn(){
    let admin = sessionStorage.getItem('admin')
    //console.log(!(admin === null))
    return !(admin === null)
  }
  logout(){
    sessionStorage.removeItem('username');
  }
}
