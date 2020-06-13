import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { Medicine } from 'src/app/models/medicine/medicine.module';
import { MserviceService } from 'src/app/services/mservice.service';

@Component({
  selector: 'app-mlist',
  templateUrl: './mlist.component.html',
  styleUrls: ['./mlist.component.css']
})
export class MlistComponent implements OnInit {
  medicines: Observable<Medicine[]>;
  constructor(private router: Router, private medicineService: MserviceService) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.medicines = this.medicineService.getMedicinesList();
  }

  deleteMedicine(id: number) {
    this.medicineService.deleteMedicine(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  medicineDetails(id: number){
    this.router.navigate(['medicinedetails', id]);
  }
  updateMedicine(id: number){
    this.router.navigate(['updatemedicine', id]);
  }
}
