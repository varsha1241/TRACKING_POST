import { Component, OnInit } from '@angular/core';
import { Courier } from '../../courier';
import {CustomerService} from '../../Customer.service';
import {Customer} from '../../Customer';
import {DeliveryService} from '../../delivery.service';
import { Delivery } from '../../delivery';
import {CourierService} from '../../Courier.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-courier-details-modify',
  templateUrl: './courier-details-modify.component.html',
  styleUrls: ['./courier-details-modify.component.css']
})
export class CourierDetailsModifyComponent implements OnInit {
  id!: String;
  cust:Courier=new Courier();
  customer:Customer=new Customer();
  delivery:Delivery=new Delivery();
  d:any;
  status!:any;
  today:any=new Date();
  constructor(private deliveryservice:DeliveryService,private custservice:CustomerService,private courierservice:CourierService,private route: ActivatedRoute,
    private router: Router) {}
      checkdate(event:any)
          {
            let date=new Date(event.target.value);
            console.log(this.today);
            this.cust.date=date.toISOString().substring(0,10);
            if(event.target.valueAsDate<this.today)
            {
              event.target.valueAsDate=this.today;
            }
          }

  ngOnInit(): void 
  {
    this.deliveryservice.findidAlone().subscribe(data =>
      {
        this.delivery=data;
        this.d=data;
        // console.log(this.delivery);
      }); 

    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.custservice.getCustomerById(this.id).subscribe(data => 
      {
      this.customer = data;
      // console.log(data);
      console.log("The customer details are :" ,this.customer)
      
      if(this.customer.product_shiped=='1')
      {
        this.status=1;
        console.log(this.status);
      }
      else if(this.customer.product_shiped=='2')
      {
        this.status=2;
        console.log(this.status);
      }
      else if(this.customer.product_shiped=='3')
      {
        this.status=3;
        console.log(this.status);
      }
      else 
      {
        this.status=0;
        console.log(this.status);
      }
    },error => console.log(error));
    this.courierservice.getProductById(this.id).subscribe(data => 
      {
      this.cust = data;
      this.today=this.cust.date;
      // console.log(data);
      console.log("The product details are :",this.cust)
      
    },error => console.log(error));
  }
  setValue() 
  {
    console.log("cust value=",this.cust);
    this.courierservice.updateProductByid(this.id, this.cust).subscribe( data =>{
      console.log(data);
      
    });  
   
      this.goToEmployeeList();
   
  }
  goToEmployeeList()
  { this.custservice.updateProductByid(this.id, this.customer).subscribe( data =>{
    // console.log(data);
    Swal.fire('Hi data modified succesfully !', 'success');
  });
    this.router.navigate(['/courier_details']);
  }

}
