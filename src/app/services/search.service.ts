import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) { }
  private baseUrl = 'http://localhost:8080/search';

  searchBlood(type:string): Observable<any> {
   
      return this.http.get(`${this.baseUrl}/blood/${type}`);
    }
    searchMed(name:string): Observable<any> {
   
      return this.http.get(`${this.baseUrl}/med/${name}`);
    }
}

