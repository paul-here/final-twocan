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
  //username : string = (document.getElementById("username") as HTMLInputElement).value;
  //password : string = (document.getElementById("passowrd") as HTMLInputElement).value;
  invalidLogin = false
  loginError: string

  constructor(private router: Router, private loginService: AuthenticationService) { }

  ngOnInit() {
    
  }

  checkPath()
  {
    if(this.username != 'admin')
    {
      // alert('User Path Active');
      this.checkLogin();
    }
    else if(this.username == 'admin')
    {
      // alert('Admin Path Active');
      this.checkAdminLogin();
    }
    else
    {
      // alert("Something's Wrong");
    }
  }

  checkLogin(){
    //alert(this.username);
    //alert(this.loginService.authenticate(this.username,this.password));
    if(this.loginService.authenticate(this.username,this.password)){
      this.router.navigate(['/home'])
      this.invalidLogin = false
      //this.loginService.logout();
      console.log("Valid")
    }

    else {
      this.invalidLogin = true
      this.loginError = "Username or Password is incorrect"
      console.log("Invalid")
    }
  }
  checkAdminLogin(){
    //alert(this.loginService.checkAdmin(this.username, this.password));
    if(this.loginService.checkAdmin(this.username,this.password)/*!=null*/){
      this.router.navigate(['/admin'])
      this.invalidLogin = false
      console.log("Admin logged in")
    }
    else{
      this.invalidLogin = true
      // alert("you are NOT SUPPOSED TO BEHERE.");
      console.log("Invalid")
    }
  }
}
