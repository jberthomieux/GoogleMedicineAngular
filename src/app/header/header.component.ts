import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
//import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public loginService:AuthenticationService) { }
  //Role:string=loginService.role;
  ngOnInit(): void {
  }
  logout(){
    this.loginService.logOut();
  }
  
  checkIfAdmin(){
    console.log(sessionStorage.getItem('Role'))
    return sessionStorage.getItem('Role') =='Admin';
  }
  
}
