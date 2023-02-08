import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomescreenComponent } from './components/homescreen/homescreen.component';
import { TrackComponent } from './components/track/track.component';
import { ProgressComponent } from './components/progress/progress.component';
import { RequestsComponent } from './components/requests/requests.component';
import { LoginValidationComponent } from './components/login-validation/login-validation.component';
import { LoginComponent } from './admin/login/login.component';
import { AdminhomescreenComponent } from './admin/adminhomescreen/adminhomescreen.component';
import { AdminlogintabComponent } from './admin/adminlogintab/adminlogintab.component';
import { RouteComponent } from './admin/route/route.component';
import { RouteDetailsComponent } from './admin/route-details/route-details.component';
import { CourierComponent } from './admin/courier/courier.component';
import { DeliverystatementLoginComponent } from './admin/deliverystatement-login/deliverystatement-login.component';
import { DeliverystatementComponent } from './admin/deliverystatement/deliverystatement.component';
import { CustdetailsComponent } from './admin/custdetails/custdetails.component';
import { CourierDetailsComponent } from './admin/courier-details/courier-details.component';
import { CustomerComponent } from './admin/customer/customer.component';
import { DeliveryloginComponent } from './admin/deliverylogin/deliverylogin.component';
import { DeliverymodifyComponent } from './admin/deliverymodify/deliverymodify.component';
import { LoginscreenComponent } from './components/loginscreen/loginscreen.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AdmintabComponent } from './components/admintab/admintab.component';
import { CourierDetailsModifyComponent } from './components/courier-details-modify/courier-details-modify.component';
import { ModifyComponent } from './delivery/modify/modify.component';

// import {DataTablesModule} from 'angular-datatables';
@NgModule({
  declarations: [
    AppComponent,
    HomescreenComponent,
    TrackComponent,
    ProgressComponent,
    RequestsComponent,
    LoginValidationComponent,
    LoginComponent,
    AdminhomescreenComponent,
    AdminlogintabComponent,
    RouteComponent,
    RouteDetailsComponent,
    CourierComponent,
    DeliverystatementLoginComponent,
    DeliverystatementComponent,
    CustdetailsComponent,
    CourierDetailsComponent,
    CustomerComponent,
    DeliveryloginComponent,
    DeliverymodifyComponent,
    LoginscreenComponent,
    LogoutComponent,
    AdmintabComponent,
    CourierDetailsModifyComponent,
    ModifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // DataTablesModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule 
{ 
}
