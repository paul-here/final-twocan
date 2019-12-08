import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import {HttpClient} from '@angular/common/http';
import { ApiServiceService } from '../service/api-service';
import { Friends } from '../service/Friends';
@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {
 
  headElements = ['Name','']


  friends : Friends;
 
  constructor(private loginService: AuthenticationService,public restApi: ApiServiceService, public router: Router,private http: HttpClient) { }

  ngOnInit() {
    //this.getFriends();
  }

  friendRequest(){
    let _request : string = (document.getElementById("friendRequest")as HTMLInputElement).value;

    //this.lo
    let user = sessionStorage.getItem("username");
    let f_request = {
      username: user,
      request: _request
    };
    this.http.post<Friends>('http://twocan-zuul.us-east-2.elasticbeanstalk.com/users/addFriend',f_request).subscribe(data => {
      console.log(data);
      this.friends = data;
    
    })

  }

  getFriends(){
    // this.http.get<Friends[]>('http://twocan-zuul.us-east-2.elasticbeanstalk.com/users/').subscribe(data => {
    //   console.log(data);
    //   this.Friends = data;
    
    // })
  }

}
