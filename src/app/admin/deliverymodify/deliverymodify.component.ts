import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../Customer.service';
import {Customer} from '../../Customer';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-deliverymodify',
  templateUrl: './deliverymodify.component.html',
  styleUrls: ['./deliverymodify.component.css']
})
export class DeliverymodifyComponent implements OnInit {

  id!: String;
  status!:any;
  cust:Customer=new Customer();
  constructor(private custservice:CustomerService,private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit() 
  {
    this.id = this.route.snapshot.params['id'];
    // console.log(this.id);
    this.custservice.getCustomerById(this.id).subscribe(data => 
      {
      this.cust = data;
      // console.log(data);
      // console.log(this.cust)
      status=this.cust.product_shiped;
      console.log("STATUS",status);
      if(this.cust.product_shiped=='1')
      {
        this.status=1;
        console.log(this.status);
      }
      else if(this.cust.product_shiped=='2')
      {
        this.status=2;
        console.log(this.status);
      }
      else if(this.cust.product_shiped=='3')
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
  }
  setValue() 
  {
    console.log("cust value=",this.cust);
    this.custservice.updateProductByid(this.id, this.cust).subscribe( data =>{
      console.log(data);
      Swal.fire('Hi data modified succesfully !', 'success');
      this.goToEmployeeList();
    }
    , error => console.log(error));  
    // this.saveEmployee();
  }
  goToEmployeeList()
  { 
    this.router.navigate(['/cust_details']);
    
  }

}
