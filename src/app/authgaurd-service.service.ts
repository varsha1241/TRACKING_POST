import { Injectable } from '@angular/core';
import { CanActivate } from '../../node_modules/@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthgaurdServiceService implements CanActivate{

  canActivate():boolean
  {
    return true;
  }
  constructor() { }
}
