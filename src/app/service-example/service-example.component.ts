import { Component, OnInit } from '@angular/core';
import {ActiveInactiveUserService} from  '../active-inactive-user.service'
@Component({
  selector: 'app-service-example',
  templateUrl: './service-example.component.html',
  styleUrls: ['./service-example.component.css']

})
export class ServiceExampleComponent implements OnInit {
  activeUser :any;
  inActiveUser :any;
  constructor(private activeservice : ActiveInactiveUserService) { }

  ngOnInit() {
    this.activeUser = this.activeservice.activeUser;

    this.inActiveUser = this.activeservice.inActiveUser;
    console.log(this.activeUser,this.inActiveUser )
  }
  inActiveToActive(user){
    this.inActiveUser.splice(user,1);
    this.activeUser.push(user);
    console.log( this.inActiveUser,this.activeUser)
  }
  activeToinActive(user){
    this.activeUser.splice(user,1);
    this.inActiveUser.push(user);
    console.log( this.inActiveUser,this.activeUser)
  }



}
