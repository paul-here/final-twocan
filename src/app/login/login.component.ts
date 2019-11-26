import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // username: string;
  // password: string;

  constructor() { }

  ngOnInit() {
    

  }
  gettingUserInfo(){
    var username = (document.getElementById("email"));
    var password = (document.getElementById("password"));

    //Call to service to request users information
    console.log(username);
    console.log(password);

  }
}
