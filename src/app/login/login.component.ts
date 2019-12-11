import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username : string
  password: ''
  invalidLogin = false
  loginError: string

  constructor(private router: Router, private loginService: AuthenticationService) { }

  ngOnInit() {
    
  }

  checkPath()
  {
    if(this.username != 'admin')
    {
      
      this.checkLogin();
      console.log("checkLoginCall")

    } else {

      this.checkAdminLogin();
      console.log("checkAdminCall")
    }
  }

  checkLogin(){
    if(this.loginService.authenticate(this.username,this.password)){
      this.router.navigate(['/home'])
      this.invalidLogin = false
      console.log("Valid")
    }

    else {
      this.invalidLogin = true
      this.loginError = "Username or Password is incorrect"
      console.log("Invalid")
    }
  }
  checkAdminLogin(){
    if(this.loginService.checkAdmin(this.username,this.password)/*!=null*/){
      this.router.navigate(['/admin'])
      this.invalidLogin = false
      console.log("Admin logged in")
    }
    else{
      this.invalidLogin = true
      console.log("Invalid")
    }
  }
}
