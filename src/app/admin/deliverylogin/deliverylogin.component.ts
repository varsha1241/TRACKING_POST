import { Component, OnInit } from '@angular/core';
import {CourierService} from '../../Courier.service';
import {Courier} from '../../courier';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-deliverylogin',
  templateUrl: './deliverylogin.component.html',
  styleUrls: ['./deliverylogin.component.css']
})
export class DeliveryloginComponent implements OnInit {

  id!:String;
  pass!:String;
  cust:Courier=new Courier();
  c:any;
  track!:String;
  response:any;
  constructor(private courierservice:CourierService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void 
  {
   
  }
  clickEvent(id:any,pass:any)
  {
    sessionStorage.setItem("deliverylogin",id);
    this.courierservice.getadmin(this.id,this.pass).subscribe(data =>{
      this.response = data;
      if(this.response.Message === "Matched"){
        console.log("matched data...");
        this.router.navigate(['/modify',this.id]);
      }
      else if (this.response.Message === "NotMatched")
      {
        Swal.fire('Data is not matched. !',"","warning");
        this.router.navigate(['/dlogin']);
      }
    
    // if(this.checking(id))
    // {
    // this.router.navigate(['/modify',id]);
    // }
    // else
    // {
    //   window.alert("Enter a valid consigent number starting with DTDC");
    // }
    });
  }
}
  // checking(id:any):boolean
  // {
  //   var flag=true;
  //   if((id==undefined) || ((id.length>15) || (id.length<8))|| (id.charAt(0)!='D')|| (id.charAt(1)!='T')|| (id.charAt(2)!='D')|| (id.charAt(3)!='C'))
  //   {
  //     flag=false;
  //   }

  //   return flag;
  //  }
// }
   

