import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import {Progress} from './progress_file'
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProgressService {

  private baseURL = " http://localhost:8088/api/v1/courier";

  constructor(private httpClient: HttpClient) { }

  getProductById(track: String): Observable<Progress>
  {
    return this.httpClient.get<Progress>(`${this.baseURL}/courierid/${track}`);
  }
}