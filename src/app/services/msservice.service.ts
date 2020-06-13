import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MsserviceService {

  constructor(private http:HttpClient) { }
  private baseUrl = 'http://localhost:8080/mshop';

  
  getMedicineShop(medId: number): Observable<any> {
    const headers= new HttpHeaders({Authorization:sessionStorage.getItem('jwtToken')
  });
  headers.append('Constent-Type', 'application/json');
    return this.http.get(`${this.baseUrl}/shop/${medId}`,{headers});
  }

  createMedicineShop(medicineshop: Object, uid:number): Observable<Object> {
    const headers= new HttpHeaders({Authorization:sessionStorage.getItem('jwtToken')
  });
  headers.append('Constent-Type', 'application/json');
    return this.http.post(`${this.baseUrl}/add`, medicineshop,{headers});
  }

  updateMedicineShop(medId: number, value: any): Observable<Object> {
    const headers= new HttpHeaders({Authorization:sessionStorage.getItem('jwtToken')
  });
  headers.append('Constent-Type', 'application/json');
    return this.http.put(`${this.baseUrl}/update/${medId}`, value,{headers});
  }

  deleteMedicineShop(medshopId: number): Observable<any> {
    const headers= new HttpHeaders({Authorization:sessionStorage.getItem('jwtToken')
  });
  headers.append('Constent-Type', 'application/json');
    return this.http.delete(`${this.baseUrl}/delete/${medshopId}`, { headers });
  }

  getMedicineShopList(): Observable<any> {
    const headers= new HttpHeaders({Authorization:sessionStorage.getItem('jwtToken')
  });
  headers.append('Constent-Type', 'application/json');
    return this.http.get(`${this.baseUrl}/mshops`,{headers});
  }
}
