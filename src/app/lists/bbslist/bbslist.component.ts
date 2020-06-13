import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BloodBankShop } from 'src/app/models/blood-bank-shop/blood-bank-shop.module';
import { Router, ActivatedRoute } from '@angular/router';
import { BbsserviceService } from 'src/app/services/bbsservice.service';
import { User } from 'src/app/models/user/user.module';


@Component({
  selector: 'app-bbslist',
  templateUrl: './bbslist.component.html',
  styleUrls: ['./bbslist.component.css']
})
export class BbslistComponent implements OnInit {
  bloodbankshops: Observable <BloodBankShop[]>;
  user:User = new User();
  constructor(private router: Router, private route: ActivatedRoute,
    private bloodbankShopService: BbsserviceService) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.bloodbankshops = this.bloodbankShopService.getBBsList();
  }
  deleteBBShop(id: number) {
    this.bloodbankShopService.deleteBBShop(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  bBShopDetails(id: number){
    this.router.navigate(['bloodbankdetails', id]);
    }
    // createUser(){
    //   this.user.sid=this.route.snapshot.params['id'];
    //   this.addUser.createUser();
    // }
  updateBBShop(id: number){
    this.router.navigate(['updatebloodbankshop', id]);
  }

}
