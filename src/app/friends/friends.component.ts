import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import {HttpClient, HttpParams} from '@angular/common/http';
import { ApiServiceService } from '../service/api-service';
import { Friends } from '../service/friends';
@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {
 
  headElements = ['Name','']


  Friends : Friends[] = [];
 
  constructor(private loginService: AuthenticationService,public restApi: ApiServiceService, public router: Router,private http: HttpClient) { }

  ngOnInit() {
    this.getFriends();
  }

  friendRequest(){
    let _request : string = (document.getElementById("friendRequest")as HTMLInputElement).value;

    //this.lo
    let user = sessionStorage.getItem("username");
    const params = new HttpParams()
    .append('friendID', _request)
    .append('userid', user);
    this.http.post<any>('http://twocan-users.us-east-2.elasticbeanstalk.com/users/addFriend?' + 'friendID=' + _request + '&' + 'userid=' + user,{params}).subscribe(data => {
      //console.log('Sent request');
    })


  }

  getFriends(){
    let user = sessionStorage.getItem("username");
    this.http.get<Friends[]>('http://twocan-users.us-east-2.elasticbeanstalk.com/users/getFriends?userID=' + user).subscribe(data => {
      console.log(data);
      //this.Friends = data;
    
    })
  }

}
