import { Component, OnInit } from '@angular/core';
import {User } from '../service/User';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-createacct',
  templateUrl: './createacct.component.html',
  styleUrls: ['./createacct.component.scss']
})
export class CreateacctComponent implements OnInit {

 


  constructor() { }

  ngOnInit() {
  }
  createAccount(){
    // let firstName = document.getElementById("inputFName");
    // let lastName = document.getElementById("inputLName");
    // let email = document.getElementById("inputEmail");
    // let password = document.getElementById("inputPassword");

    // console.log(firstName.getAttribute('value'));
    // console.log(lastName);
    // console.log(email);
    // console.log(password);

    let _username : string = (document.getElementById("inputuserName")as HTMLInputElement).value;
    let _email : string = (document.getElementById("inputEmail") as HTMLInputElement).value;
    let _password : string = (document.getElementById("inputPassword") as HTMLInputElement).value;
    let user = {
      username: _username,
      email: _email,
      password :_password

    };
    this.http.get<User[]>('http://twocan-zuul.us-east-2.elasticbeanstalk.com/users/getAll').subscribe(data => {
      console.log(data);
      this.Users = data;
    //   for(i : data)
    //     list.pushback(i);
    // })
    })


  }
}
