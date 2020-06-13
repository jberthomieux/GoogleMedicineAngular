import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BloodBank } from 'src/app/models/blood-bank/blood-bank.module';
import { BbserviceService } from 'src/app/services/bbservice.service';

@Component({
  selector: 'app-bbupdate',
  templateUrl: './bbupdate.component.html',
  styleUrls: ['./bbupdate.component.css']
})
export class BbupdateComponent implements OnInit {
 
  bbid: number;
  bloodbank: BloodBank;
  public submitted: boolean=false;
  
  constructor(private route: ActivatedRoute,private router: Router,
  private bloodbankservice: BbserviceService) { }

  ngOnInit() {
    this.bloodbank = new BloodBank();

    this.bbid = this.route.snapshot.params['id'];
    
    this.bloodbankservice.getBloobank(this.bbid)
      .subscribe(data => {
        console.log(data)
        this.bloodbank = data;
      }, error => console.log(error));
  }

  updateBloodbank() {
    //this.bbid = this.route.snapshot.params['id'];
    this.bloodbankservice.updateBloobank(this.bbid, this.bloodbank)
      .subscribe(data => console.log(data), error => console.log(error));
    this.bloodbank = new BloodBank();
    this.gotoList();
  }

  onSubmit() {
    this.updateBloodbank();    
  }

  gotoList() {
    this.router.navigate(['/bloodbanks']);
  }


}
