import { Component, OnInit } from '@angular/core';
import {IntermediateService} from '../../Intermediate.service';
import {Intermediate} from '../../intermediate';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent implements OnInit 
{

  inter:Intermediate=new Intermediate();
  setValue() 
  {
    console.log(this.inter);  
    this.saveEmployee();
  }
  constructor(private interservice:IntermediateService,
    private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit()
  {
    this.router.navigate(['/adminhome']); 
  }
  saveEmployee(){
    this.interservice.createEmployee(this.inter).subscribe(data =>{
      console.log(data);
      Swal.fire('Hi data is inserted succesfully !', 'success');
      this.onSubmit();
    });
  }

}
