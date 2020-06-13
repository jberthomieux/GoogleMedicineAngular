
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpClientModule } from '@angular/common/http';
import {map} from 'rxjs/operators'

export class JwtResponse {
  constructor(public token:string){}
}
  @Injectable({
      providedIn:'root'
  })

export class AuthenticationService {

  constructor(private http:HttpClient) { }
  authenticate(username:string, password:string) {
    // const headers = new HttpHeaders({Authorization: 'Bearer ' + btoa(username + ":" + password)});
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    let creds = '{"username":"' + username + '","password":"' + password + '"}';
    console.log("The request header: " + creds);  
    return this.http.post<JwtResponse>('http://localhost:8080/token/generate-token', creds, {headers})
    .pipe(map(
        userData => {
            let tknStr = 'Bearer ' + userData.token;
            sessionStorage.setItem('jwtToken', tknStr);
            sessionStorage.setItem('username',username);
            // const base64Url = userData.token.split('.')[1];
            // const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            // const decodedToken = decodeURIComponent(atob(base64).split('').map(function(c) {
            //   return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            //   }).join(''));
           // const token = JSON.parse(decodedToken);
            //sessionStorage.setItem('role', token.scopes);
            console.log('Inside userAuth ' + userData.token);
            return userData}
    ));
    
   
        }
        isUserLoggedIn(){
          let user=sessionStorage.getItem('username')
         // console.log(!user===null)
          return !(user===null)
      }
      isAdmin(){
        const headers= new HttpHeaders({Authorization:sessionStorage.getItem('jwtToken')
      });
      headers.append('Constent-Type', 'application/json');
        return this.http.get<Boolean>(`http://localhost:8080/user/role`,{headers});
      }
      logOut(){
          sessionStorage.clear();
      }
}
