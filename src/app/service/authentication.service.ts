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

      alert(sessionStorage.getItem('username'));
      
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
        //temp = data;
        alert(data);
        if(data === true)
        {
          //temp = "true";
          //alert( 'temp == ' + temp)
          //alert('step1');
          sessionStorage.setItem('admin', username);
          //return true;
        }
        // else
        // {
        //   //alert('step2');
        //   temp = "false";
        // }
        /*else
        {
          alert("Boolean??")      
        }*/
      })
      /*if(temp == true)
      {
        sessionStorage.setItem('admin', username);
      }
      alert(temp + " == temp");
      return temp;*/
      //return false;
      //return temp;
      // if(temp == "true")
      // {
      //   alert('temp returning true');
      //   return true;
      // }
      // else
      // {
      //   alert('It is fucking false..');
      //   return false;
      // }
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
    let returnDisp;
    if(username != "admin")
    {
      // const params = new HttpParams()
      // .append('password', password)
      // .append('userID', username);
      // this.http.post<any>('http://twocan-zuul.us-east-2.elasticbeanstalk.com/users/login', {params}).subscribe(data => {
      //   alert(data);
      //   returnDisp = data;
      // })
      // if(returnDisp == true)
      // {
      //   sessionStorage.setItem('username', username);
      // }
      returnDisp = this.checkUser(username, password);
    }
    else
    {
      //alert(this.checkAdmin(username, password));
      returnDisp = this.checkAdmin(username, password);
      //alert(returnDisp + '@checkAdmin') 
    }
    //alert(returnDisp + ' == returnDisp')
    return returnDisp;

  }

  // checkAdmin(username, password)
  // {
  //   let temp;
  //   const params = new HttpParams()
  //     .append('password', password)
  //     .append('userID', username);
  //     this.http.post<any>('http://twocan-zuul.us-east-2.elasticbeanstalk.com/users/login?' + 'password=' + password + '&' +'userID='+username, {params}).subscribe(data => {
  //       //alert(data);
  //       //temp = data;
  //       alert(data);
  //       if(data === true)
  //       {
  //         temp = "true";
  //         sessionStorage.setItem('admin', username);
  //         //return true;
  //       }
  //       else
  //       {
  //         temp = "false";
  //       }
  //       /*else
  //       {
  //         alert("Boolean??")      
  //       }*/
  //     })
  //     /*if(temp == true)
  //     {
  //       sessionStorage.setItem('admin', username);
  //     }
  //     alert(temp + " == temp");
  //     return temp;*/
  //     //return false;
  //     //return temp;
  //     if(temp === "true")
  //     {
  //       return true;
  //     }
  //     else
  //     {
  //       return false;
  //     }
  // }

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
<<<<<<< HEAD
    //console.log(!(user == null))
=======
    //console.log(!(user === null))
>>>>>>> 36793a0a4ab22f71ad9f93084b88ef7b37d4d2fc
    return !(user === null)

  }
  isAdminLoggedIn(){
<<<<<<< HEAD
    let admin = sessionStorage.getItem('username')
    //console.log(!(admin == null))
=======
    let admin = sessionStorage.getItem('admin')
    //console.log(!(admin === null))
>>>>>>> 36793a0a4ab22f71ad9f93084b88ef7b37d4d2fc
    return !(admin === null)
  }
  logout(){
    sessionStorage.removeItem('username');
  }
}
