import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerDetailService {

  constructor() {}
  item =[] ;
  index;
  customerDetails = [
    {
        Id:1,
      firstName: 'Rahul ',
      lastName: 'C K',
      address: 'Pathanamthita',
      gender: 'Male',
      state: 'Kerala',
      email: 'rahul@gmail.com'
    },
    {
      Id:2,
      firstName: 'Hari ',
      lastName: 'Krishnan',
      address: 'Alappuzha',
      gender: 'Male',
      email: 'rahul@gmail.com',
      state: 'Kerala'
    },
    {
      Id:3,  
      firstName: 'Justin ',
      lastName: 'Simu',
      address: 'Koothattukullam',
      gender: 'Male',
      state: 'Kerala',
      email: 'rahul@gmail.com'
    },
    {
        Id:4,
        firstName: 'Jacob ',
      lastName: 'Lawerence',
      address: 'Kanjirapally',
      gender: 'Male',
      state: 'Kerala',
      email: 'rahul@gmail.com'
    },
    {
        Id:5,
      firstName: 'Vijay ',
      lastName: 'Joseph',
      address: 'Alappuzha',
      gender: 'Male',
      state: 'Kerala',
      email: 'rahul@gmail.com'
    }
  ]
 


  addToCart(customer) {
    this.customerDetails.push(customer);
  }
  addItem(Item, index){
      this.item = [];
      this.index = index;
      this.item.push(Item);
 
      
  }
  getSpecificItem(){
      return this.item;
  }

  getItems() {
    return this.customerDetails;
  }

  clearCart() {
    this.customerDetails = [];
    return this.customerDetails;
  }

  updateCustomerdetails(newItem){
    for (let i = 0; i < this.customerDetails.length; i++) {  
      if (i == this.index) {  
        this.customerDetails[i].firstName = newItem.FirstName; 
        this.customerDetails[i].lastName = newItem.LastName; 
        this.customerDetails[i].address = newItem.Address; 
        this.customerDetails[i].gender = newItem.Gender; 
        this.customerDetails[i].state = newItem.State;  
      }  
    }  
  }
 
}







//subject rxjs 