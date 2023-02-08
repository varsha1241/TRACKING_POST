import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import { RouteConfigLoadEnd } from '@angular/router';
import { Progress } from '../../progress_file';
import { Router, ActivatedRoute } from '@angular/router';
import {ProgressService} from '../../progress_file.service';
import {DeliveryService} from '../../delivery.service';
// import { NgxWatermarkOptions } from 'ngx-watermark';
import { Delivery } from '../../delivery';
import {jsPDF} from 'jspdf';
import html2canvas from 'html2canvas';
import { CourierDetailsModifyComponent } from '../courier-details-modify/courier-details-modify.component';
@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {
  id!:any;
  couriers: Progress=new Progress();
  courier:any;

  ddetails:Delivery=new Delivery();
  ddetail:any;

  bagtotal!:any;
  discount!:any;
  order_total:number=0;
  conveience_fee:string="FREE"
  amount_paid:number=0;
  deliveryid!:any;
//   options: NgxWatermarkOptions = {
//     text: 'This is NGX-WATERMARK\nSimple watermark text\nmultiple line and custom font',
//     width: 350,
//     height: 300,
//     fontFamily: 'Kanit',
//     color: '#999',
//     alpha: 0.7,
//     degree: -45,
//     fontSize: '20px',
// };
  constructor(private progressService: ProgressService,private deliveryservice:DeliveryService,
    private route: ActivatedRoute, private router:Router) 
    { 
       
    }
 
  ngOnInit(): void 
  { 
    // this.id = this.route.snapshot.params['id'];
    // localStorage.setItem("id",this.id);
    this.id=localStorage.getItem("id");
    this.progressService.getProductById(this.id).subscribe( data => {
    this.courier = data;
    this.couriers=data;
    console.log("courier",data);
    console.log("courier",this.couriers);
    this.deliveryid=this.couriers.deliveryboypin;
    this.deliveryservice.getDeliveryBoyById(this.deliveryid).subscribe( datas => {
      console.log(this.deliveryid);
      this.ddetail=datas;
      this.ddetails=datas;
      // console.log("Delivery detail",this.ddetail);
      // console.log(this.ddetails.phonenumber);
      });
    });
   
  }
  discounts()
  {
    if(this.couriers.bill_amount>=1000  && this.couriers.bill_amount!=0)
    {
      this.conveience_fee="FREE"
      this.bagtotal=this.couriers.bill_amount;
      this.discount="100";
      this.bagtotal-=100;
      this.order_total=this.bagtotal;
      this.amount_paid=Math.round(this.order_total); 
    }
    else if (this.couriers.bill_amount<1000 && this.couriers.bill_amount!=0)
    {
      this.conveience_fee="10"
      this.bagtotal=this.couriers.bill_amount;
      this.discount="No discount";
      this.bagtotal+=10;
      this.order_total=this.bagtotal;
      this.amount_paid=Math.round(this.order_total); 
    } 
  }
  notvalid()
  {
    // window.alert("The entered DTDC number record is not available");
    // this.router.navigate(['/login']);
  }
  modify()
{
  
}

@ViewChild('htmlData') htmlData!: ElementRef;
public openpdf(): void 
{
  let DATA: any = document.getElementById('htmlData');
  html2canvas(DATA).then((canvas) => {
    let fileWidth = 208;
    let fileHeight = (canvas.height * fileWidth) / canvas.width;
    const FILEURI = canvas.toDataURL('image/png');
    let PDF = new jsPDF('p', 'mm', 'a4');
    let position = 0;
    PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
    let name=this.id+".pdf";
    // "C:\Users\z036324\OneDrive - Alliance\Desktop\TRACKING_STATEMENT",
    PDF.save(name);
  });
}
}

