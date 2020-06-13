
import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable()
export class UserService {

  constructor(private http:HttpClient) {}
  

  private baseUrl = 'http://localhost:8080/user';
	//private userUrl = '/api';
  getUser(id: number): Observable<any> {
    const headers= new HttpHeaders({Authorization:sessionStorage.getItem('jwtToken')
  });
  headers.append('Constent-Type', 'application/json');
    return this.http.get(`${this.baseUrl}/${id}`,{headers});
  }

  createUser(user: Object): Observable<Object> {
    const headers= new HttpHeaders({Authorization:sessionStorage.getItem('jwtToken')
  });
  headers.append('Constent-Type', 'application/json');
    return this.http.post(`${this.baseUrl}/add`, user,{headers});
  }

  updateUser(id: number, value: any): Observable<Object> {
    const headers= new HttpHeaders({Authorization:sessionStorage.getItem('jwtToken')
  });
  headers.append('Constent-Type', 'application/json');
    return this.http.put(`${this.baseUrl}/update/${id}`, value,{headers});
  }

  deleteUser(id: number): Observable<any> {
    const headers= new HttpHeaders({Authorization:sessionStorage.getItem('jwtToken')
  });
  headers.append('Constent-Type', 'application/json');
    return this.http.delete(`${this.baseUrl}/delete/${id}`,{headers});
  }

  getUsersList(): Observable<any> {
    const headers= new HttpHeaders({Authorization:sessionStorage.getItem('jwtToken')
  });
  headers.append('Constent-Type', 'application/json');
    return this.http.get(`${this.baseUrl}/users`,{headers});
  }
  // isAdmin(){
  //   const headers= new HttpHeaders({Authorization:sessionStorage.getItem('jwtToken')
  // });
  // headers.append('Constent-Type', 'application/json');
  //   return this.http.get<Boolean>(`http://localhost:8080/user/role`);
  // }

}