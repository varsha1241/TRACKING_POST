import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomescreenComponent} from './components/homescreen/homescreen.component'
import { RequestsComponent } from './components/requests/requests.component';
import { ProgressComponent } from './components/progress/progress.component';
import { TrackComponent } from './components/track/track.component';
import { LoginValidationComponent } from './components/login-validation/login-validation.component';
import { LoginComponent } from './admin/login/login.component';
import { AdminhomescreenComponent } from './admin/adminhomescreen/adminhomescreen.component';
import { RouteComponent } from './admin/route/route.component';
import { RouteDetailsComponent } from './admin/route-details/route-details.component';
import { CourierComponent } from './admin/courier/courier.component';
import { DeliverystatementComponent } from './admin/deliverystatement/deliverystatement.component';
import { DeliverystatementLoginComponent } from './admin/deliverystatement-login/deliverystatement-login.component';
import { CustdetailsComponent } from './admin/custdetails/custdetails.component';
import { CourierDetailsComponent } from './admin/courier-details/courier-details.component';
import { CustomerComponent } from './admin/customer/customer.component';
import { DeliveryloginComponent } from './admin/deliverylogin/deliverylogin.component';
import { DeliverymodifyComponent } from './admin/deliverymodify/deliverymodify.component';
import { LoginscreenComponent } from './components/loginscreen/loginscreen.component';
import { LogoutComponent } from './components/logout/logout.component';
import { CourierDetailsModifyComponent } from './components/courier-details-modify/courier-details-modify.component';
import { ModifyComponent } from './delivery/modify/modify.component';
import { AuthenticateGuard } from './authenticate.guard';

const routes: Routes = [
  {path:'home',component:HomescreenComponent},
  // {path:'mainlogin',component:LoginscreenComponent},
  {path:'adminhome',component:AdminhomescreenComponent},
  // {path:'route_details',component:RouteDetailsComponent},
  // {path:'route',component:RouteComponent},
  {path:'mail',component:RequestsComponent},
  {path:'progress',component:ProgressComponent,canActivate:[AuthenticateGuard]},
  {path:'track',component:TrackComponent,canActivate:[AuthenticateGuard]},
  {path:'login',component:LoginValidationComponent},
  {path:'adminlogin',component:LoginComponent},
  {path:'requesting',component:RequestsComponent},
  // {path:'customer',component:CustomerComponent},
  {path:'courier',component:CourierComponent,canActivate:[AuthenticateGuard]},
  {path:'dlogin',component:DeliveryloginComponent},
  {path:'dmodify/:id',component:DeliverymodifyComponent,canActivate:[AuthenticateGuard]},
  {path:'modify/:id',component:ModifyComponent,canActivate:[AuthenticateGuard]},
  // {path:'dslogin',component:DeliverystatementLoginComponent},
  {path:'statement/:id',component:DeliverystatementComponent,canActivate:[AuthenticateGuard]},
  {path:'cmodify/:id',component:CourierDetailsModifyComponent,canActivate:[AuthenticateGuard]},
  {path:'cust_details',component:CustdetailsComponent, canActivate:[AuthenticateGuard]},
  {path:'courier_details',component:CourierDetailsComponent,canActivate:[AuthenticateGuard]},
  {path:'adminlogout',component:LogoutComponent},
  // {path:'cust_modify/:id',component:CustomerModifyComponent}
  // {path: '', redirectTo: 'mainlogin', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
