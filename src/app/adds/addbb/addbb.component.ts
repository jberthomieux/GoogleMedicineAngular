import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BloodBank } from 'src/app/models/blood-bank/blood-bank.module';
import { BloodBankShop } from 'src/app/models/blood-bank-shop/blood-bank-shop.module';
import { BbserviceService } from 'src/app/services/bbservice.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-addbb',
  templateUrl: './addbb.component.html',
  styleUrls: ['./addbb.component.css']
})

export class AddbbComponent implements OnInit {
  bloodbank: BloodBank = new BloodBank();
  submitted:boolean = false; 
  bloodbankshop:BloodBankShop =new BloodBankShop();
  constructor(private router: Router, private bloodbankService: BbserviceService,public loginService:AuthenticationService) { }
  ngOnInit(): void {
  }
  
  newBloodbank(): void {
    this.submitted = false;
    this.bloodbank = new BloodBank();
  }
  save() {
    this.bloodbankService.createBloobank(this.bloodbank,this.bloodbankshop.bbId)
      .subscribe(data => console.log(data), error => console.log(error));
    this.bloodbank = new BloodBank();
    this.gotoList();
  }
  onSubmit() {
    this.submitted = true;
    this.save();    
  }
  gotoList() {
    this.router.navigate(['/addbb']);
  }

  createBloodbank(): void {
    this.bloodbankService.createBloobank(this.bloodbank, this.bloodbankshop.bbId)
        .subscribe( data => {
          alert("Blood add successfully.");
        });

  };
}
