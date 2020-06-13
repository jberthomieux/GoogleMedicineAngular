import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medicine } from 'src/app/models/medicine/medicine.module';
import { MserviceService } from 'src/app/services/mservice.service';
import { MedicineShop } from 'src/app/models/medicine-shop/medicine-shop.module';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-addmed',
  templateUrl: './addmed.component.html',
  styleUrls: ['./addmed.component.css']
})

export class AddmedComponent implements OnInit {
  medicine: Medicine = new Medicine();
  submitted:boolean = false; 
  // sid:number;
 medicineshop:MedicineShop =new MedicineShop();
  constructor(private router: Router, private medicineService: MserviceService,public loginService:AuthenticationService) { }

  ngOnInit(): void {
  }
  
  newMedicine(): void {
    this.submitted = false;
    this.medicine = new Medicine();
  }
  save() {
    this.medicineService.createMedicine(this.medicine,this.medicineshop.medId)
      .subscribe(data => console.log(data), error => console.log(error));
    this.medicine = new Medicine();
    this.gotoList();
  }
  onSubmit() {
    this.submitted = true;
    this.save();    
  }
  gotoList() {
    this.router.navigate(['/addmed']);
  }

  createMedicine(): void {
    this.medicineService.createMedicine(this.medicine, this.medicineshop.medId)
        .subscribe( data => {
          alert("Medicine add successfully.");
        });

  };
}
