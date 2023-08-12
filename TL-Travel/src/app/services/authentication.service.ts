import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';
import { Observable } from 'rxjs';
import { TLTravelToken } from '../models/tl-travel-token.model';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private httpClient: HttpClient;
  
  constructor(httpClient: HttpClient) { 
    this.httpClient = httpClient;
  }
  
  public authenticate(userName: string, password: string): Observable<TLTravelToken>
  {
    const headers= new HttpHeaders()
      .set('content-type', 'application/json');
    
    return this.httpClient.post<TLTravelToken>("http://localhost:5000/api/Security/SignIn",
    {
      userName,
      password,
      revokeExistingToken: true,
      rememberMe: true
    }, { 'headers': headers });
  }

  public logOut()
  {
    console.log(1);
    sessionStorage.removeItem('Token');
  }

  public isAuthenticated(): boolean
  {
    // This is test!!!!
    // Must rewrite it using request to theTLTravel API!!!
    console.log(sessionStorage.getItem('Token'));
    if(sessionStorage.getItem('Token') == null)
    {
      return false; 
    }

    return true;
  }
}

