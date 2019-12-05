import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {
  elements: any = [{id:1,name:"Jack" },
   {id:2,name:"Mikal"},
   {id:3,name:"Paul"},
   {id:4,name:"Gurpreet"}

  ];
  headElements = ['Name','']

 
  constructor() { }

  ngOnInit() {
  }

}
