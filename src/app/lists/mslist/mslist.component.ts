import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicineShop } from 'src/app/models/medicine-shop/medicine-shop.module';
import { Observable } from 'rxjs';
import { MsserviceService } from 'src/app/services/msservice.service';

@Component({
  selector: 'app-mslist',
  templateUrl: './mslist.component.html',
  styleUrls: ['./mslist.component.css']
})
export class MslistComponent implements OnInit {
  medicineShops: Observable <MedicineShop[]>;
  constructor(private router: Router, private medicineShopService: MsserviceService) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.medicineShops = this.medicineShopService.getMedicineShopList();
  }
  deleteMedicineShop(id: number) {
    this.medicineShopService.deleteMedicineShop(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  medicineShopDetails(id: number){
    this.router.navigate(['medicineshopdetails', id]);
  }
  updateMedicineShop(id: number){
    this.router.navigate(['updatemedicineshop', id]);
  }
}
