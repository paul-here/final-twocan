import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: 'Jorge'
  password: ''
  invalidLogin = true

  constructor(private router: Router, private loginService: AuthenticationService) { }

  ngOnInit() {
    

  }
  checkLogin(){
    if(this.loginService.authenticate(this.username,this.password)){
      this.router.navigate(['/home'])
      this.invalidLogin = false
      console.log("Valid")
    }
    else {
      this.invalidLogin = true
      console.log("Invalid")
    }
  }
}
