import { Component, OnInit } from '@angular/core';
import { Location } from '../../location';
import { LocationService } from '../../Location.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit 
{
  value!:any;
  id!:any;
  // location:Location=new Location();
  location!:Location;
  locations!:any;
  constructor(private locationService: LocationService,private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void 
  {
   
    this.value=localStorage.getItem("id");
    this.id = localStorage.getItem("id"); 
    console.log(this.id);
    this.locationService.getlocationById(this.id).subscribe(data => 
      {
      this.locations = data;
      console.log(this.locations);
    });
   
  }

}
