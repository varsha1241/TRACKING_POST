import { Component, OnInit } from '@angular/core';
import { Customer } from '../../Customer';
import { CustomerService } from '../../Customer.service';
import {CourierService} from '../../Courier.service';
import {Courier} from '../../courier';
import {DeliveryService} from '../../delivery.service';
import {Delivery} from '../../delivery';
import { Email } from '../../email';
import { EmailService } from '../../email.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-custdetails',
  templateUrl: './custdetails.component.html',
  styleUrls: ['./custdetails.component.css']
})
export class CustdetailsComponent implements OnInit 
{
  sent:boolean=false;
  constructor(private delservice:DeliveryService,private courierservice:CourierService,private emailservice:EmailService,private customerservice:CustomerService,private router: Router) { }
  customer!:Customer[];

  id!: String;
  cust:Customer=new Customer();
  cou:Courier=new Courier();
  del:Delivery=new Delivery();
  ngOnInit()
  {
    this.successNotification();
  }

  successNotification() 
  {
    this.customerservice.getAllProducts().subscribe(data => 
      {
      this.customer = data;
      // console.log(data);
      });
  }

 
  modify(tracking:String)
  {
    // console.log(tracking);
    this.sent=true;
    this.customerservice.getCustomerById(tracking).subscribe(data => 
      {
      this.cust = data;
      this.id=this.cust.tracking;
      console.log("ID IS:",this.id)
      // console.log(this.cust);
    });

   this.courierservice.getProductById(tracking).subscribe(data => 
      {
        this.cou=data;
      // console.log(this.cou.deliveryboypin);
    });
    // this.delservice.getDeliveryBoyById(this.cou.deliveryboypin).subscribe(data => 
    //   {
    //     this.del=data;
    //   console.log("The delivery details ",this.del);
    // });
    this.emailservice.sendEmail(this.cust,this.id).subscribe(data =>
      {
        console.log("FRONT END ID",this.id);
      },err=>{
      console.log(err.message);
    },()=>
  {
    console.log("completed");
  });
  }
}
