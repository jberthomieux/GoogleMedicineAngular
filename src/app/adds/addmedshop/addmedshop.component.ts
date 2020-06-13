import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user/user.module';
import { MedicineShop } from 'src/app/models/medicine-shop/medicine-shop.module';
import { Router } from '@angular/router';
import { MsserviceService } from 'src/app/services/msservice.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-addmedshop',
  templateUrl: './addmedshop.component.html',
  styleUrls: ['./addmedshop.component.css']
})
export class AddmedshopComponent implements OnInit {
  medicineshop: MedicineShop = new MedicineShop();
  submitted:boolean = false; 
  user:User =new User();

  constructor(private router: Router, public loginService:AuthenticationService,private medicineshopService: MsserviceService) { }

  ngOnInit(): void {
  }
  newMedicineShop(): void {
    this.submitted = false;
    this.medicineshop = new MedicineShop();
  }
  save() {
    this.medicineshopService.createMedicineShop(this.medicineshop,this.user.id)
      .subscribe(data => console.log(data), error => console.log(error));
    this.medicineshop = new MedicineShop();
    this.gotoList();
  }
  onSubmit() {
    this.submitted = true;
    this.save();    
  }
  gotoList() {
    this.router.navigate(['/addmedshop']);
  }
  createMedicineShop(): void {
    this.medicineshopService.createMedicineShop(this.medicineshop, this.user.id)
        .subscribe( data => {
          alert("Medicine_shop add successfully.");
        });

  };

}
