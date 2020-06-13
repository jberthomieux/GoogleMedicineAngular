import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class BbserviceService {

  constructor(private http:HttpClient,auth:AuthenticationService) { }
  private baseUrl = 'http://localhost:8080/bloodbank';
  
  getBloobank(id: number): Observable<any> {
    const headers= new HttpHeaders({Authorization:sessionStorage.getItem('jwtToken')
  });
  headers.append('Constent-Type', 'application/json');
    return this.http.get(`${this.baseUrl}/bloodbank/${id}`,{headers});
  }

  createBloobank(bloobank: Object, sid:number): Observable<Object> {
    const headers= new HttpHeaders({Authorization:sessionStorage.getItem('jwtToken')
  });
  headers.append('Constent-Type', 'application/json');
    return this.http.post(`${this.baseUrl}/addbb/${sid}`, bloobank,{headers});
  }

  updateBloobank(id: number, value: any): Observable<Object> {
    const headers= new HttpHeaders({Authorization:sessionStorage.getItem('jwtToken')
  });
  headers.append('Constent-Type', 'application/json');
    return this.http.put(`${this.baseUrl}/update/${id}`,value,{headers});
  }

  deleteBloobank(id: number): Observable<any> {
    const headers= new HttpHeaders({Authorization:sessionStorage.getItem('jwtToken')
  });
  headers.append('Constent-Type', 'application/json');
    return this.http.delete(`${this.baseUrl}/delete/`+id, {headers});
  }

  getBloobanksList(): Observable<any> {
    const headers= new HttpHeaders({Authorization:sessionStorage.getItem('jwtToken')
  });
  headers.append('Constent-Type', 'application/json');
    return this.http.get(`${this.baseUrl}/bloodbanks`,{headers});
  }
}
