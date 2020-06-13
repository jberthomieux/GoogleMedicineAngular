import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BbserviceService } from 'src/app/services/bbservice.service';
import { BloodBank } from 'src/app/models/blood-bank/blood-bank.module';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bblist',
  templateUrl: './bblist.component.html',
  styleUrls: ['./bblist.component.css']
})
export class BblistComponent implements OnInit {
  bloodbanks: Observable <BloodBank[]>;
  constructor(private router: Router, private bloodbankService: BbserviceService) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.bloodbanks = this.bloodbankService.getBloobanksList();
  }
  deleteBloodbank(id: number) {
    this.bloodbankService.deleteBloobank(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  bloodbankDetails(id: number){
    this.router.navigate(['bloodbankdetails', id]);
  }
  updateBloodbank(id: number){
    this.router.navigate(['updatebloodbank', id]);
  }

}
