import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { FilterPipe } from './pipes/searchfilter.pipe';
import { PopOverComponent } from './pop-over/pop-over.component';
import { CustomerComponent } from './customer/customer.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddCustomerComponent,
    CustomerDetailsComponent,
    EditCustomerComponent,
    FilterPipe,
    PopOverComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
