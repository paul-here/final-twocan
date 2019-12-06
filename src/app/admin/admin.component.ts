import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service';
import { Router } from '@angular/router';
import {user } from '../service/user';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  //user: {};
  User : any = [];

  constructor(public restApi: ApiServiceService, public router: Router) { }

  username:string;
  
  ngOnInit() {
   
  }

  getallUsers(){
    //   this.restApi.getAllUsers().subscribe((data: {}) => {
    //   this.User = data;
    // })
    this.restApi.getAllUsers().subscribe(data => {
      for(const d of(data as any)){
        username: d.username;
        password: d.password;
        email: d.email;
        friendsList: d.friendsList;
        groupsList: d.groupsList;
        
      }
    })
  }
}
