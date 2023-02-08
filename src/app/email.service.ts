import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import {Email} from './email'
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private baseURL = " http://localhost:8087/email";

  constructor(private httpClient: HttpClient) { }

  sendEmail(email: Email,id:String): Observable<Object>
  {
    console.log("ID IS :",id);
    return this.httpClient.post(`${this.baseURL}/send-email/${id}`,email);
  }
  sendEmailwithquery(email: String,id:String,request :String): Observable<Object>
  {
    return this.httpClient.post(`${this.baseURL}/${id}/${email}/${request}`,Email);
  }
}