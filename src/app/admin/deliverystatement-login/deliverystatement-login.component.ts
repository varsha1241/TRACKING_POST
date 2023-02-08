import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-deliverystatement-login',
  templateUrl: './deliverystatement-login.component.html',
  styleUrls: ['./deliverystatement-login.component.css']
})
export class DeliverystatementLoginComponent implements OnInit {
  id!:String;
  clickEvent(id:any)
  {
    console.log(id.length);
    if(this.checking(id))
    {
    this.router.navigate(['/statement',id]);
    }
    else
    {
      window.alert("Enter a valid consigent number starting with DTDC");
    }
  }
  checking(id:any):boolean
  {
    var flag=true;
    if((id==undefined) || ((id.length>15) || (id.length<8))|| (id.charAt(0)!='D')|| (id.charAt(1)!='T')|| (id.charAt(2)!='D')|| (id.charAt(3)!='C'))
    {
      flag=false;
    }

    return flag;
  }
  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void 
  {
  }

}
