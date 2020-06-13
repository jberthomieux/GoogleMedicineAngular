import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Medicine } from 'src/app/models/medicine/medicine.module';
import { MserviceService } from 'src/app/services/mservice.service';

@Component({
  selector: 'app-mupdate',
  templateUrl: './mupdate.component.html',
  styleUrls: ['./mupdate.component.css']
})
export class MupdateComponent implements OnInit {

  bbid: number;
  medicine: Medicine;
  public submitted: boolean=false;
  
  constructor(private route: ActivatedRoute,private router: Router,
  private medicineservice: MserviceService) { }

  ngOnInit() {
    this.medicine = new Medicine();

    this.bbid = this.route.snapshot.params['id'];
    
    this.medicineservice.getMedicine(this.bbid)
      .subscribe(data => {
        console.log(data)
        this.medicine = data;
      }, error => console.log(error));
  }

  updateMedicine() {
    //this.bbid = this.route.snapshot.params['id'];
    this.medicineservice.updateMedicine(this.bbid, this.medicine)
      .subscribe(data => console.log(data), error => console.log(error));
    this.medicine = new Medicine();
    this.gotoList();
  }

  onSubmit() {
    this.updateMedicine();    
  }

  gotoList() {
    this.router.navigate(['/medicines']);
  }


}