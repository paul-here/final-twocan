import { Component, OnInit } from '@angular/core';

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
    var firstName = document.getElementById("inputFName");
    var lastName = document.getElementById("inputLName");
    var email = document.getElementById("inputEmail");
    var password = document.getElementById("inputPassword");

    console.log(firstName.getAttribute('value'));
    console.log(lastName);
    console.log(email);
    console.log(password);


  }
}
