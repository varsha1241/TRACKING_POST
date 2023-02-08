import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import {Intermediate} from './intermediate'
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class IntermediateService {

  private baseURL = "http://localhost:8088/api/v1/intermediate";

  constructor(private httpClient: HttpClient) { }

  createEmployee(sign: Intermediate): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, sign);
  } 
  getAllProducts(): Observable<Intermediate[]>{
    return this.httpClient.get<Intermediate[]>(`${this.baseURL}`);
  }
}