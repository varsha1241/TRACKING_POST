import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthenticateGuard implements CanActivate {
  constructor(private router: Router)
  {

  }
  id!:any;
  uid!:any;
  did!:any;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.id=sessionStorage.getItem("adminid");
      this.did=sessionStorage.getItem("deliverylogin");
      this.uid=localStorage.getItem("id");
      if (this.id != null || this.did!=null || this.uid)
       {
         console.log("From guard "+"this.isAuthenticated");
         return true;
        }
      this.router.navigate(['/login']);
      return false;
  }
  
}
