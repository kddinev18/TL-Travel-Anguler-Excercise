import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServerResponse } from '../models/server-response.model';
import { Hotel } from '../models/hotel.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private httpClient: HttpClient;
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  public getAllHotels(pageSize: number, pageNumber: number, propertyName: string, sortOrder:string): Observable<ServerResponse<Hotel>> {
    const headers= new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', `Bearer ${sessionStorage.getItem('Token')}`);
      
    return this.httpClient.post<ServerResponse<Hotel>>('http://localhost:5000/api/Hotels/GetAll', 
    { 
      pageNumber,
      pageSize, 
      sortColumns: [
        {
          propertyName,
          sortOrder
        }
      ]
    }, { 'headers': headers });
  }
}
