import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Customer} from '../../Customer';
import {CustomerService} from '../../Customer.service';
@Component({
  selector: 'app-login-validation',
  templateUrl: './login-validation.component.html',
  styleUrls: ['./login-validation.component.css']
})
export class LoginValidationComponent implements OnInit {

  id!:String;
  customer:Customer=new Customer;
  c!:any;
  clickEvent(id:any)
  {
    console.log(id.length);
    if(this.checking(id))
    {
      localStorage.setItem("id",id);
      this.router.navigate(['/progress']);
    }
    else
    {
      window.alert("Enter a valid consigent number starting with DTDC");
    }
  }
  checking(id:any):boolean
  {
    var flag=false;
    var i:number;
    console.log(this.c);
    for(i=0;i<this.c.length;i++)
    {
      if(this.c[i]==id)
      {
        flag=true;
      }
    }
    if((id==undefined) || ((id.length>15) || (id.length<8))|| (id.charAt(0)!='D')|| (id.charAt(1)!='T')|| (id.charAt(2)!='D')|| (id.charAt(3)!='C'))
    {
      flag=false;
    }
    console.log(flag);
    return flag;
   
  }
  constructor(private cust:CustomerService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void 
  {
    this.cust.getIdAlone().subscribe(data => 
      {
      this.customer = data;
      this.c=this.customer;
    },error => console.log(error));
  }

}
