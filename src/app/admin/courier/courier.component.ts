import { Component, OnInit } from '@angular/core';
import {CourierService} from '../../Courier.service';
import {Courier} from '../../courier';
import {CustomerService} from '../../Customer.service';
import {DeliveryService} from '../../delivery.service';
import {Customer} from '../../Customer';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Delivery } from '../../delivery';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { DatePipe } from '../../../../node_modules/@angular/common';
// import { MatDialogModule } from '@angular/material/dialog';
@Component({
  selector: 'app-courier',
  templateUrl: './courier.component.html',
  styleUrls: ['./courier.component.css']
})
export class CourierComponent implements OnInit {
  
  c:Courier=new Courier();
  cust:Customer=new Customer();
  delivery:Delivery=new Delivery();
  d:any;
  t:any;
  status!:number;
  pincode:any;
  address:any;
  dummydate!:any;
  response:any;
  second_response:any;
  today:any=new Date();
  constructor(private custservice:CustomerService,private deliveryservice:DeliveryService,
    private courierservice:CourierService,private router: Router) { }
    // checkdate(event:any)
    //       {
    //         let date=new Date(event.target.value);
    //         this.c.date=date.toISOString().substring(0,10);
    //         if(event.target.valueAsDate<this.today)
    //         {
    //           event.target.valueAsDate=this.today;
    //         }
    //       }
  setValue() 
    {

        if(this.t.length<11)
        {
         let tracknumber:string = "DTDC"+this.t;
         console.log(tracknumber);
         let fulladdress=this.address+this.pincode;
         console.log(fulladdress);
          this.c.track=tracknumber;
          this.cust.tracking=tracknumber;
          this.c.address=fulladdress;
          this.saveEmployee();  
        }
    }
  ngOnInit(): void 
  {
    this.status=0;
    this.deliveryservice.findidAlone().subscribe(data =>
      {
        this.delivery=data;
        this.d=data;
        console.log(this.delivery);
      });
      this.c.date=new Date().toISOString().substring(0, 10);
  }
  onerror()
  {
    this.router.navigate(['/courier']); 
  }
  sample()
  {
    Swal.fire({
      html: `<table id="table" border=1>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>ADDRESS</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>CHBN</td>
                    <td>CHENNAI-KANCHEPURAM-MADIWALA-BANGLORE</td>
                </tr>
                <tr>
                  <td>CHBN02</td>
                  <td>CHENNAI-CHENGALPATTU-KANCHEEPURAM-MADIWALA-JPNAGAR-BANGLORE</td>
                </tr>
            </tbody>
    </table>`
    });
  }
  onSubmit()
  {
    this.router.navigate(['/courier_details']); 
  }
  saveEmployee()
  {
    this.courierservice.saveProduct(this.c.track,this.c).subscribe(data =>
    {
      this.response=data;
      if(this.response.Message=="NotMatched")
      {
        Swal.fire('Data is not inserted since ID is repeated!', "",'warning');
      }
      else
      {
        this.custservice.createEmployee(this.cust.tracking,this.cust).subscribe(data =>
          {
            this.second_response=data;
            console.log(this.second_response);
            if(this.second_response.Message=="INSERTED")
            {
              // this.status=1;
              Swal.fire('Data is inserted', "",'info');
              // console.log(this.status);
              this.onSubmit();
            }
          });
          
      }
      // console.log("COURIER DATA:" ,data);
      // console.log(this.c.date);
    }
    );         
  }
}

