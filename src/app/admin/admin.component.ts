import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service';
import { Router } from '@angular/router';
import {User } from '../service/User';
import {HttpClient} from '@angular/common/http';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  //user: {};
  Users : User[] = [];
  
  constructor(public restApi: ApiServiceService, public router: Router,private http: HttpClient) { }

  username:string;
  
  ngOnInit() {
   this.getallUsers()
  }


  getallUsers(){
  
    this.http.get<User[]>('http://twocan-zuul.us-east-2.elasticbeanstalk.com/users/getAll').subscribe(data => {
      console.log(data);
      this.Users = data;
    //   for(i : data)
    //     list.pushback(i);
    // })
    })
  }

}
