import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {
  elements: any = [{id:1,profile_pic:"userProfile.png",name:"Jack" },
   {id:2,profile_pic:"userProfile.png",name:"Mikal"},
   {id:3,profile_pic:"userProfile.png", name:"Paul"},
   {id:4,profile_pic:"userProfile.png",name:"Gurpreet"}

  ];
  headElements = ['ID','Profile Picture', 'Name','']

 
  constructor() { }

  ngOnInit() {
  }

}
