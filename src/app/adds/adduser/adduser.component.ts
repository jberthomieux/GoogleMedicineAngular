import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user/user.module';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  user:User = new User();
  submitted:boolean = false; 
  
  constructor(private router: Router,public loginService:AuthenticationService, private userService: UserService) { }
  
  ngOnInit(): void {
  }
  
  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }
  save() {
    this.userService.createUser(this.user)
      .subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
    this.gotoList();
  }
  sendMail(){
    
  }
  onSubmit() {
    this.submitted = true;
    this.save();
    this.sendMail();  
  }
  gotoList() {
    this.router.navigate(['/addusers']);
  }
 
  createUser(): void {
    this.userService.createUser(this.user)
        .subscribe( data => {
          alert("user add successfully.");
        });

  };
}