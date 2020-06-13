import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin: boolean=false;
 username='';
 password='';
  constructor(private router:Router,private loginService:AuthenticationService) { }

  ngOnInit(): void {
  }

  checkLogin(){
     (this.loginService.authenticate(this.username,this.password).subscribe(data=>
   {
     this.loginService.isAdmin().subscribe(x=>this.handleResponse())
    this.router.navigate(['/'])
    this.invalidLogin=false;
  },error=>{this.invalidLogin=true}));
 
   /* if(this.loginService.Authenticate(this.username,this.password)){
      this.router.navigate(['']);
      this.invalidLogin =false;
    }else{
      this.invalidLogin=true;
    }
  }*/
  }
  handleResponse(){
    sessionStorage.setItem('Role','Admin');
    console.log("ADMIN")
  }
}