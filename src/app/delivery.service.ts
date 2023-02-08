import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import {Delivery} from './delivery'
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  private baseURL = " http://localhost:8088/delivery";

  constructor(private httpClient: HttpClient) { }

  getDeliveryBoyById(id: String): Observable<Delivery>
  {
    return this.httpClient.get<Delivery>(`${this.baseURL}/${id}`);
  }
  findidAlone(): Observable<any>
  {
    return this.httpClient.get<Delivery>(`${this.baseURL}`);
  }
}