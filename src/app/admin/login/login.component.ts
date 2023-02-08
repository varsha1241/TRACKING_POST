import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../admin.service';
import Swal from 'sweetalert2';
import { Admin } from '../../admin';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  id!:any;
  pass!:any;
  couriers: Admin=new Admin();
  courier:any;
  response : any;
  clickEvent(id:any,pass:any)
  {
    // console.log(id);
    // console.log(pass);

    sessionStorage.setItem("adminid",id);
    this.adminservice.getadmin(id,pass).subscribe( data => {
      this.response = data;
      if(this.response.Message === "Matched"){
        console.log("matched data...");
    this.router.navigate(['/courier_details']);
      }
      else if (this.response.Message === "NotMatched")
      {
        Swal.fire('Data is not matched. !',"" ,"warning");
        this.router.navigate(['/adminlogin']);
      }
    
  });
  }

  constructor(private route: ActivatedRoute,private adminservice:AdminService,
    private router: Router)
     { }
  ngOnInit(): void 
  {
   
}
}
