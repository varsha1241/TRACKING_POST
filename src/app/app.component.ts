import { Component,ChangeDetectorRef } from '@angular/core';
import { NavigationStart, Event as NavigationEvent, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  
  title = 'CMS';
  showadminlogin:boolean=true;
  // showHead: boolean = true;
  showmain:number=0;
  showHead:number=0;
  showadmin:boolean=true;
  // showmain:boolean=true;
  constructor(private router: Router,private cdr:ChangeDetectorRef) 
  {
    router.events.forEach((event) => 
     {
        if (event instanceof NavigationStart) 
        {
          if((event['url'] == '/mainlogin')||(event['url'] == '/login')||(event['url'] == '/mail'))
          {
            this.showmain = 2;
          } 
        }
      });
    

      router.events.forEach((event) => 
     {
        if (event instanceof NavigationStart) 
        {
          if((event['url'] == '/adminlogin')||(event['url'] == '/dlogin'))
          {
            this.showmain = 1;
          } 
        }
      });
    router.events.forEach((event) => 
     {
        if (event instanceof NavigationStart) 
        {
          if((event['url'] == '/route')||(event['url'] == '/route_details')
        || (event['url']=='/courier')|| (event['url']=='/dslogin')||(event['url']=='/customer')
        ||(event.url.includes('statement'))||(event.url.includes('cust_details'))||(event.url.includes('cmodify'))
      ||(event.url.includes('courier_details'))||(event.url.includes('dmodify')))
          {
            this.showadmin = true;
          } 
          else 
          {
           this.showadmin = false;
          }
        }
      });
    }
    ngAfterViewInit()
  {
    this.router.events.forEach((event) => 
    {
       if (event instanceof NavigationStart) 
       {
         if((event.url.includes('progress'))||(event['url'] == '/track'))
         {
           this.showmain = 3;
         } 
       }
     });
     this.cdr.detectChanges();
  }
}
