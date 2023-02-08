import { Component, OnInit } from '@angular/core';
import { IntermediateService } from '../../Intermediate.service';
import {Intermediate} from '../../intermediate'
import { Router } from '@angular/router';
@Component({
  selector: 'app-route-details',
  templateUrl: './route-details.component.html',
  styleUrls: ['./route-details.component.css']
})
export class RouteDetailsComponent implements OnInit {

  constructor(private intermediateservice:IntermediateService,private router: Router) { }

  inter!:Intermediate[];
  ngOnInit()
  {
    this.successNotification();
  }
  successNotification() 
  {
    this.intermediateservice.getAllProducts().subscribe(data => 
      {
      this.inter = data;
      console.log(data);
      });
  }
}

