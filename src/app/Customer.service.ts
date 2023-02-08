import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import {Customer} from './Customer'
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseURL = "http://localhost:8088/customer";

  constructor(private httpClient: HttpClient) { }

  createEmployee(id:String,cust: Customer): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/${id}`, cust);
  } 
  getAllProducts(): Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(`${this.baseURL}`);
  }
  getCustomerById(id: String): Observable<Customer>{
    return this.httpClient.get<Customer>(`${this.baseURL}/customerid/${id}`);
  }
  updateProductByid(id: String, customer: Customer): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/modifycust/${id}`,customer);
  }
  getIdAlone(): Observable<any>
  {
    return this.httpClient.get<Customer>(`${this.baseURL}/getid`);
  }
  deleteProductById(id: String): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/delete/${id}`);
  }
}