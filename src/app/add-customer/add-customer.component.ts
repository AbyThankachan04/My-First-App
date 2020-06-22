import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerDetailService } from '../services/customerDetails.services';
import { Router } from '@angular/router';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PopOverComponent } from '../pop-over/pop-over.component';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  @ViewChild('popupInstance', { static: false }) popup: PopOverComponent;
  firstName;
  lastName;
  Address;
  state;
  gender;

  registerForm: FormGroup;
  submitted = false;

  constructor( private router:Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
    
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address:['', Validators.required],
      state: ['', Validators.required],
      gender:['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
     
     
  
  });
  }

 

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;
        // console.log(this.registerForm.value);
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        if (this.popup) {
          this.popup.show(this.registerForm.value);
        }

        // display form values on success
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
        // console.log(this.registerForm.value);
        // this._customerdetailService.addToCart(this.registerForm.value);
        // this.router.navigate(['/customer-details']);
        
    }

    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }



}
