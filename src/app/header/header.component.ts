import { Component,  Output,EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  disable;
  selectedItem;
  
  searchText: string;
  @Output() myOutput:EventEmitter<string>= new EventEmitter();
  constructor(private router: Router) { }

  ngOnInit() {
  
    if(this.router.url == '/add-customer'){
      this.disable = false;
      this.selectedItem = 'addcustomer';
    } else if (this.router.url == '/edit-customer'){
      this.disable = false;
      this.selectedItem = 'details';
    }else if (this.router.url == '/customer'){
      this.disable = false;
      this.selectedItem = 'details';
    }
    else  {this.disable = true;
    this.selectedItem = 'details'; }
}

  onKey(event: any) { // without type info
    this.myOutput.emit(this.searchText);
  }
 
 

}
