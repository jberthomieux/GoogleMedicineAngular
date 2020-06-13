import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BbsserviceService {
  constructor(private http:HttpClient) { }
  private baseUrl = 'http://localhost:8080/bbshop';
  
  getBBShop(bbId: number): Observable<any> {
    const headers= new HttpHeaders({Authorization:sessionStorage.getItem('jwtToken')
  });
  headers.append('Constent-Type', 'application/json');
    return this.http.get(`${this.baseUrl}/shop/${bbId}`,{headers});
  }

  createBBShop(bbshop: Object, uid:number): Observable<Object> {
    const headers= new HttpHeaders({Authorization:sessionStorage.getItem('jwtToken')
  });
  headers.append('Constent-Type', 'application/json');
    return this.http.post(`${this.baseUrl}/add`, bbshop,{headers});
  }

  updateBBShop(bbId: number, value: any): Observable<Object> {
    const headers= new HttpHeaders({Authorization:sessionStorage.getItem('jwtToken')
  });
  headers.append('Constent-Type', 'application/json');
    return this.http.put(`${this.baseUrl}/update/${bbId}`, value,{headers});
  }

  deleteBBShop(bbId: number): Observable<any> {
    const headers= new HttpHeaders({Authorization:sessionStorage.getItem('jwtToken')
  });
  headers.append('Constent-Type', 'application/json');
    return this.http.delete(`${this.baseUrl}/delete/${bbId}`, { headers });
  }

  getBBsList(): Observable<any> {
    const headers= new HttpHeaders({Authorization:sessionStorage.getItem('jwtToken')
  });
  headers.append('Constent-Type', 'application/json');

    return this.http.get(`${this.baseUrl}/shops`, {headers});
  }


}
