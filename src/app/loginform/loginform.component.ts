import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {UserServices} from '../services/userServices';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  constructor(private userServices:UserServices) { }
    userService:UserServices[] 
  ngOnInit() {
   this.userServices.getAllUsers().then(userService=>this.userService=userService);   
    
  }

  loginUser(e){
  	e.prevent
  	 alert(e);
  	var username=e.targets.elements[0].value;
  	var password=e.targets.elements[1].value;
  	console.log("dsdsd",username);
    
  }

}
