import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CustomerDetailService } from '../services/customerDetails.services';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  userObj;
  firstName;
  lastName;
  Address;
  state;
  gender;
  constructor(private _customerService: CustomerDetailService,private router:Router, private object: ChangeDetectorRef) { }

  ngOnInit() {
    this.userObj = this._customerService.getSpecificItem();
    
    this.firstName= this.userObj[0].firstName;
    this.lastName = this.userObj[0].lastName;
    this.Address = this.userObj[0].address;
    this.state = this.userObj[0].state;
    // this.object.detectChanges();
   
  }

  onItemChange(value) {
    this.gender = value;
  }
  updateButtonClicked(){
    let payload = {
      FirstName: this.firstName,
      LastName: this.lastName,
      Address: this.Address,
      Gender: this.gender,
      State:this.state,

    }
    this._customerService.updateCustomerdetails(payload) ;
    this.router.navigate(['/customer-details']);
  }
  cancelButtonClicked(){
    this.router.navigate(['/customer-details']);
  }

}
