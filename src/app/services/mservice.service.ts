import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MserviceService {

  constructor(private http:HttpClient) { }
  private baseUrl = 'http://localhost:8080/medicine';

   getMedicine(medId: number): Observable<any> {
    const headers= new HttpHeaders({Authorization:sessionStorage.getItem('jwtToken')
  });
  headers.append('Constent-Type', 'application/json');
    return this.http.get(`${this.baseUrl}/medicine/${medId}`);
  }

  createMedicine(medicine: Object, sid:number): Observable<Object> {
    const headers= new HttpHeaders({Authorization:sessionStorage.getItem('jwtToken')
  });
  headers.append('Constent-Type', 'application/json');
    return this.http.post(`${this.baseUrl}/add/${sid}`, medicine,{headers});
  }

  updateMedicine(id: number, value: any): Observable<Object> {
    const headers= new HttpHeaders({Authorization:sessionStorage.getItem('jwtToken')
  });
  headers.append('Constent-Type', 'application/json');
    return this.http.put(`${this.baseUrl}/update/${id}`, value,{headers});
  }

  deleteMedicine(medId: number): Observable<any> {
    const headers= new HttpHeaders({Authorization:sessionStorage.getItem('jwtToken')
  });
  headers.append('Constent-Type', 'application/json');
    return this.http.delete(`${this.baseUrl}/delete/${medId}`, { headers });
  }

  getMedicinesList(): Observable<any> {
    const headers= new HttpHeaders({Authorization:sessionStorage.getItem('jwtToken')
  });
  headers.append('Constent-Type', 'application/json');
    return this.http.get(`${this.baseUrl}/medicines`,{headers});
  }
}
