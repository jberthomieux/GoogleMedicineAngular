import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Search } from 'src/app/models/search/search.module';
//import { Searchm } from 'src/app/models/Searchm/searchm.module';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  type:string;
  name:string;
  search1: Observable <Search[]>;
  search2: Observable <Search[]>
  public show:boolean=false; 
  public buttonName:any = 'BloodSearch';
  constructor(private router: Router, private searchService: SearchService) { }

  ngOnInit() {
    
  }
  reloadData1() {
     this.searchService.searchBlood(this.type)
     .subscribe(response1=>this.handlSucessResponse1(response1));
    }
  handlSucessResponse1(response1:any){
    this.search1=response1
  }
  
  reloadData2() {
    this.searchService.searchMed(this.name)
    .subscribe(response2=>this.handlSucessResponse2(response2));
   }
 handlSucessResponse2(response2:any){
   this.search2=response2
 }

 toggle(){
   this.show=!this.show;
   if(this.show)  
   this.buttonName = "Search Blood";
 else
   this.buttonName = "Search Med";
 }
 }
