import { Component, OnInit } from '@angular/core';
import { CustomerDetailService } from '../services/customerDetails.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  searchText: string;
  receivedChildMessage: string;
 customer = [];
  constructor(private _customerdetailService: CustomerDetailService, private router: Router) { }

  ngOnInit() {
   this.customer =  this._customerdetailService.getItems();
   
  }
  OnClickOrderDetail(detail,index){
    this._customerdetailService.addItem(detail, index);
    this.router.navigate(['/edit-customer']);
  }
  getMessage(message: string) {
    this.searchText = message;
  }
  OnClickCustomer(customer, index){
    console.log(customer);
    this._customerdetailService.addItem(customer, index);
    this.router.navigate(['/customer']);
  }


}
