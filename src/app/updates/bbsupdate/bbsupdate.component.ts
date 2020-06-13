import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BloodBankShop } from 'src/app/models/blood-bank-shop/blood-bank-shop.module';
import { BbsserviceService } from 'src/app/services/bbsservice.service';

@Component({
  selector: 'app-bbsupdate',
  templateUrl: './bbsupdate.component.html',
  styleUrls: ['./bbsupdate.component.css']
})
export class BbsupdateComponent implements OnInit {

  bbsid: number;
  bloodbankshop: BloodBankShop;
  public submitted: boolean=false;
  constructor(private route: ActivatedRoute,private router: Router,
    private bloodbankshopservice: BbsserviceService) { }

    ngOnInit() {
      this.bloodbankshop = new BloodBankShop();
  
      this.bbsid = this.route.snapshot.params['id'];
      
      this.bloodbankshopservice.getBBShop(this.bbsid)
        .subscribe(data => {
          console.log(data)
          this.bloodbankshop = data;
        }, error => console.log(error));
    }
    updateBloodbankShop() {
      this.bloodbankshopservice.updateBBShop(this.bbsid, this.bloodbankshop)
        .subscribe(data => console.log(data), error => console.log(error));
      this.bloodbankshop = new BloodBankShop();
      this.gotoList();
    }
  
    onSubmit() {
      this.updateBloodbankShop();    
    }
  
    gotoList() {
      this.router.navigate(['/bloodbankshops']);
    }

}
