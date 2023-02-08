import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../Customer.service';
import {Customer} from '../../Customer';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  cust:Customer=new Customer();
  constructor(private custservice:CustomerService,
    private router: Router) { }
    
    setValue() 
    {
      console.log(this.cust);  
      this.saveEmployee();
    }
  ngOnInit(): void 
  {

  }
  onSubmit()
  {
    this.router.navigate(['/home']); 
  }
  saveEmployee(){
    this.custservice.createEmployee(this.cust.tracking,this.cust).subscribe(data =>{
      console.log(data);
      Swal.fire('Hi data is inserted succesfully !', 'success');
      this.onSubmit();
    });
  }
}
