import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
import { Email } from '../../email';
import { EmailService } from '../../email.service';
import { HttpHeaders } from '@angular/common/http';
// import { Http2ServerRequest } from 'http2';
@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  // http!:any;
  constructor(private route: ActivatedRoute, private router:Router,private emailservice:EmailService) { }
  id!:any;
  msg!:any;
  email!:any;
  response:any;
  navigate()
  {
    Swal.fire('Ticket raised. !',"","success");
    this.router.navigate(['/login']);
  }

  ngOnInit(): void 
  {

  }
  checking()
  {
    var flag:boolean=true;
    if((this.id==undefined) || ((this.id.length>15) || (this.id.length<8))|| 
    (this.id.charAt(0)!='D')|| (this.id.charAt(1)!='T')|| (this.id.charAt(2)!='D')||
     (this.id.charAt(3)!='C'))
    {
      window.alert("Dear user ! Recheck the DTDC number entered once again !!");
    }
    else
    {
      this.onsubmit();
    }
  }
  onsubmit() 
  {
    
    this.emailservice.sendEmailwithquery(this.id,this.email,this.msg).subscribe( data => 
      {
        this.response=data;
        if(this.response.Message="SUCCESS")
        {
          this.navigate();
        }
     
      },
    error =>  Swal.fire('Server down try again later !',"","error"));
  }

}
