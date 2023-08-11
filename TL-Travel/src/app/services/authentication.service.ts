import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private httpClient: HttpClient;
  
  constructor(httpClient: HttpClient) { 
    this.httpClient = httpClient;
  }
  
  public authenticate(userName: string, password: string): Observable<string>
  {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    
    return this.httpClient.post<string>("http://localhost:5000/api/Security/SignIn",
    `{
      "userName": "${userName}",
      "password": "${password}",
      "revokeExistingToken": true,
      "rememberMe": true
    }`, {headers});
  }
}

