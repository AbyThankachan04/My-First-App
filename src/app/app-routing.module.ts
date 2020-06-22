import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { CustomerComponent } from './customer/customer.component';


const routes: Routes = [
  {path: '', component: CustomerDetailsComponent },
  {path: 'customer-details', component: CustomerDetailsComponent },
  {path: 'add-customer', component: AddCustomerComponent },
  {path: 'edit-customer', component: EditCustomerComponent },
  {path: 'customer', component: CustomerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
