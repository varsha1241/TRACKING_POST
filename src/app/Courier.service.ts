import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import {Courier} from './courier'
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CourierService 
{

  private baseURL = "http://localhost:8088/api/v1/courier";

  constructor(private httpClient: HttpClient) { }

  saveProduct(id:String,c: Courier): Observable<any>{
    return this.httpClient.post(`${this.baseURL}/${id}`, c);
  } 
  getAllProducts(): Observable<Courier[]>{
    return this.httpClient.get<Courier[]>(`${this.baseURL}`);
  }
  getProductById(id: String): Observable<Courier>{
    return this.httpClient.get<Courier>(`${this.baseURL}/courierid/${id}`);
  }
  getadmin(id: String,pass: String): Observable<Courier>{
    return this.httpClient.get<Courier>(`${this.baseURL}/${id}/${pass}`);
  }
  updateProductByid(id: String, courier: Courier): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/modifycourier/${id}`,courier);
  }
  deleteProductById(id: String): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/delete/${id}`);
  }
}