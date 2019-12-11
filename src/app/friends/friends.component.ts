import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import {HttpClient, HttpParams} from '@angular/common/http';
import { ApiServiceService } from '../service/api-service';
import { Friends } from '../service/friends';
import { Messages } from '../service/message';
import { interval } from 'rxjs';
@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {
 
  headElements = ['Name','']


  Friends : Friends[] = [];
  Messages : any = [];

  MergedId: string;
  MyInput: string;

  // TODO: Change to 5000
  Poll = interval(1000);
 
  constructor(private loginService: AuthenticationService,public restApi: ApiServiceService, public router: Router,private http: HttpClient) { }

  ngOnInit() {
    //this.getFriends();
    this.getFriends();

    this.Poll.subscribe(x => {
      const mergedId = this.MergedId
      this.http.get('http://twocan-zuul.us-east-2.elasticbeanstalk.com/messages/getMessages?n=15&uniqID=' + mergedId)
        .subscribe(messages => this.Messages = messages)
    })
  }

  friendRequest(){
    let _request : string = (document.getElementById("friendRequest")as HTMLInputElement).value;

   
    let user = sessionStorage.getItem("username");
    const params = new HttpParams()
    .append('friendID', _request)
    .append('userid', user);
    this.http.post<any>('http://twocan-users.us-east-2.elasticbeanstalk.com/users/addFriend?' + 'friendID=' + _request + '&' + 'userid=' + user,{params}).subscribe(data => {
      console.log('Sent request');
    })


  }

  getFriends(){
 
    let user = sessionStorage.getItem("username");
    this.http.get<Friends[]>('http://twocan-zuul.us-east-2.elasticbeanstalk.com/users/getFriends?userID=' + user).subscribe(data => {
      console.log(data);
      this.Friends = data;
    
    })
  }

  checkMessages(mergedId)
  {
    this.MergedId = mergedId;
    //document.getElementById('chatbox').innerHTML="";
    this.http.get<Messages[]>('http://twocan-zuul.us-east-2.elasticbeanstalk.com/messages/getMessages?n=15&uniqID=' + mergedId).subscribe(data =>{
      console.log(data);
      this.Messages = data;
    })
    //console.log(mergedId);
    //alert(mergedId);
  }

  sendMessage()
  {
    // let message : string = (document.getElementById("sendMessage")as HTMLInputElement).value;
    let user= sessionStorage.getItem('username');

    // console.log(this.MyInput)
    // console.log(this.MergedId)
    // console.log(user)
    
    this.http.post('http://twocan-zuul.us-east-2.elasticbeanstalk.com/messages/addMessage?text=' + this.MyInput + '&uniqID=' + this.MergedId + '&userID=' + user, {

    })//(`http://twocan-zuul.us-east-2.elasticbeanstalk.com/messages/addMessage`, {
      // text: this.MyInput,
      // uniqID: this.MergedId,
      // userID: user
    .subscribe(data => console.log(data))

    this.MyInput = ''
  }

}
