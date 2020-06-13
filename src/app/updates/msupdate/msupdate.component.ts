import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MedicineShop } from 'src/app/models/medicine-shop/medicine-shop.module';
import { MsserviceService } from 'src/app/services/msservice.service';


@Component({
  selector: 'app-msupdate',
  templateUrl: './msupdate.component.html',
  styleUrls: ['./msupdate.component.css']
})
export class MsupdateComponent implements OnInit {
  medId: number;
  medicineShop: MedicineShop;
  public submitted: boolean=false;

  constructor(private route: ActivatedRoute,private router: Router,
    private medicineShopService: MsserviceService) { }

    ngOnInit() {
      this.medicineShop = new MedicineShop();
  
      this.medId = this.route.snapshot.params['id'];
      
      this.medicineShopService.getMedicineShop(this.medId)
        .subscribe(data => {
          console.log(data)
          this.medicineShop = data;
        }, error => console.log(error));
    }
  
    updateMedicineShop() {
      this.medicineShopService.updateMedicineShop(this.medId, this.medicineShop)
        .subscribe(data => console.log(data), error => console.log(error));
      this.medicineShop = new MedicineShop();
      this.gotoList();
    }
  
    onSubmit() {
      this.updateMedicineShop();    
    }
  
    gotoList() {
      this.router.navigate(['/medicineshops']);
    }
}
