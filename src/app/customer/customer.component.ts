import { Component, OnInit } from '@angular/core';
import { CustomerDetailService } from '../services/customerDetails.services';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  userObj;
  firstName;
  lastName;
  Address;
  state;
  gender;
  email;
  constructor(private _customerdetailService: CustomerDetailService) { }

  ngOnInit() {
    this.userObj = this._customerdetailService.getSpecificItem();
    

    this.firstName= this.userObj[0].firstName;
    this.lastName = this.userObj[0].lastName;
    this.Address = this.userObj[0].address;
    this.state = this.userObj[0].state;
    this.gender = this.userObj[0].gender;
    this.email = this.userObj[0].email;
    
  }

}
