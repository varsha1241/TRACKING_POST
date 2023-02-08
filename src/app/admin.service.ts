import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import {Admin} from './admin'
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseURL = "http://localhost:8088/admin";

  constructor(private httpClient: HttpClient) { }

  getadmin(id: String,pass:String): Observable<Admin>{
    return this.httpClient.get<Admin>(`${this.baseURL}/${id}/${pass}`);
  }
}