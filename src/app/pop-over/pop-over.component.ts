import { Component, OnInit } from '@angular/core';
import { CustomerDetailService } from '../services/customerDetails.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pop-over',
  templateUrl: './pop-over.component.html',
  styleUrls: ['./pop-over.component.css']
})
export class PopOverComponent implements OnInit {
  hidden = true;
  item;
  constructor(private _customerdetailService: CustomerDetailService,  private router:Router) { }

  ngOnInit() {
  }

  show(poppupPayload) {
    this.hidden = false;
    this.item = poppupPayload;
  }

  hide() {
    this.hidden = true;
  }
  OnClickYes(){
    this._customerdetailService.addToCart(this.item);
   this.router.navigate(['/customer-details']);
  }
  
}
