import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import {Location} from './location'
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private baseURL = " http://localhost:8088/location";

  constructor(private httpClient: HttpClient) { }

  getlocationById(track: String): Observable<Location>
  {
    return this.httpClient.get<Location>(`${this.baseURL}/${track}`);
  }
  getProductsById(id: String): Observable<Location>{
    return this.httpClient.get<Location>(`${this.baseURL}/customerid/${id}`);
  }
}