import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users = ['Jorge','Mikal','Paul','Gurpreet']

  constructor(private loginService: AuthenticationService) { }

  ngOnInit() {
    let temp = sessionStorage.getItem("username");
    //alert(temp);
    
  }

}
