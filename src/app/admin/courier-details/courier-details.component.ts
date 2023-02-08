import { Component, OnInit } from '@angular/core';
import { CourierService } from '../../Courier.service';
import {CustomerService} from '../../Customer.service';
import {Customer} from '../../Customer';
import {Courier} from '../../courier'
import { Router } from '@angular/router';

// import {DataTablesModule} from 'angular-datatables';
@Component({
  selector: 'app-courier-details',
  templateUrl: './courier-details.component.html',
  styleUrls: ['./courier-details.component.css']
})
export class CourierDetailsComponent implements OnInit {

  // dtOptions:DataTables.Settings={};
  showContent : any;

  constructor(private custservice:CustomerService,private courierservice:CourierService,private router: Router) { }
  courier!:Courier[];
  customer!:Customer[];

  ngOnInit()
  {
    this.successNotification();
    // this.dtOptions={pagingType:'full_numbers',pageLength:5,lengthMenu:[5,10,15,20],processing:true};
    // setTimeout(()=>this.showContent=true, 250)
  }
  successNotification() 
  {
    this.courierservice.getAllProducts().subscribe(data => 
      {
      this.courier = data;
      console.log("the coruier data:",data);
      });
      this.custservice.getAllProducts().subscribe(data => 
      {
      this.customer = data;
      console.log(data);
      });
  }
  delete(track:String)
  {
    this.courierservice.deleteProductById(track).subscribe(data =>  {
        // console.log(data);
        // this.router.navigate(['/courier_details']);
      });
      this.custservice.deleteProductById(track).subscribe(data =>  {
        // console.log(data);
      });
      this.router.navigate(['/courier_details']);
  }
  modify(id:any)
  {
    this.router.navigate(['/cmodify',id]);
  }
  invoice(id:any)
  {
    this.router.navigate(['/statement',id]);
  }
}
