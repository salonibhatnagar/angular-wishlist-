import { Component, OnInit } from '@angular/core';

import { Product } from './product';
import { EmployeeService } from './app.EmployeeService';

@Component({
  selector: 'create-customer',
  templateUrl: './app.addEmployee.html',
 
})
export class CreateCustomerComponent implements OnInit {

  product: Product = new Product();
  submitted = false;

  constructor(private customerService: EmployeeService) { }
  ngOnInit() {
  }

  newProduct(): void {
    this.submitted = false;
    window.location.reload();
    //this.account = new Account();
  }

  save() {
    this.customerService.createWishList(this.product)
      .subscribe(data => console.log(data), error => console.log(error));
    // this.account = new Account();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}