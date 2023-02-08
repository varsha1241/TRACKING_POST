import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import {CustomerService} from '../../Customer.service';
import { CourierService } from '../../Courier.service';
import {Courier} from '../../courier'
import { ActivatedRoute, Router } from '@angular/router';
import {jsPDF} from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-deliverystatement',
  templateUrl: './deliverystatement.component.html',
  styleUrls: ['./deliverystatement.component.css']
})
export class DeliverystatementComponent implements OnInit {

  id!:any;
  bill!:any;
  discount!:any;

  dp:string="DELIVERY PIN";
  da:string="DELIVERY ADDRESS"

  couriers: Courier=new Courier();
  courier:any;
  constructor(private custservice:CustomerService,
    private courierservice:CourierService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void 
  {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.courierservice.getProductById(this.id).subscribe( data => {
    this.courier = data;
    this.couriers=data;
    console.log("courier",data);
    console.log("courier",this.couriers);
    this.calculate();
    });
  }
  calculate()
  {
    this.bill=this.couriers.bill_amount;
    if(this.bill>'1000')
    {
        this.discount="Rs.100";
        this.bill=parseInt(this.bill)-100;
        console.log(this.bill);
    }
    else
    {
      this.discount="Sorry no discount";
    }
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
  // @ViewChild('content',{static:false})el!:ElementRef;
  // makepdf()
  // {
  //   let pdf=new jsPDF('l','pt');
  //   pdf.html(this.el.nativeElement,
  //     {callback:(pdf)=>
  //       {pdf.save("demo.pdf")}
  //     });
  // }
}

