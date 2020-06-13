import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BloodBankShop } from 'src/app/models/blood-bank-shop/blood-bank-shop.module';
import { User } from 'src/app/models/user/user.module';
import { BbsserviceService } from 'src/app/services/bbsservice.service';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-addbbs',
  templateUrl: './addbbs.component.html',
  styleUrls: ['./addbbs.component.css']
})
export class AddbbsComponent implements OnInit {
  bloodbankshop: BloodBankShop = new BloodBankShop();
  submitted:boolean = false; 
  user:User =new User();

  constructor(private router: Router, public loginService:AuthenticationService,private bloodbankShopService: BbsserviceService) { }
  ngOnInit(): void {
  }
  
  newBloodbankShop(): void {
    this.submitted = false;
    this.bloodbankshop = new BloodBankShop();
  }
  save() {
    this.bloodbankShopService.createBBShop(this.bloodbankshop,this.user.id)
      .subscribe(data => console.log(data), error => console.log(error));
    this.bloodbankshop = new BloodBankShop();
    this.gotoList();
  }
  onSubmit() {
    this.submitted = true;
    this.save();    
  }
  gotoList() {
    this.router.navigate(['/addbbs']);
  }
  createBloodbankShop(): void {
    this.bloodbankShopService.createBBShop(this.bloodbankshop, this.user.id)
        .subscribe( data => {
          alert("Blood_shop add successfully.");
        });

  };

}
