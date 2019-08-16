import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from './app.EmployeeService';
import { Product } from './product';
import { Observable } from 'rxjs';

//import { viewListComponent } from '../customers-list/customers-list.component';

@Component({
  selector: 'customer-details',
  templateUrl: 'app.viewlist.html'
  
})
export class ViewAccountComponent implements OnInit {

  //@Input() accounts: Observable<Account[]>;
  @Input() products: Observable<Product[]>;
  constructor(private customerService: EmployeeService ) { }
 // private listComponent: CustomersListComponent
  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.products = this.customerService.getproductsList();
    console.log(this.products);
  }


   

  // updateActive(isActive: boolean) {
  //   this.customerService.updateCustomer(this.customer. accountId,
  //     { mobileno: this.customer.mobileno, holdername: this.customer.holdername,balance:this.customer.balance })
  //     .subscribe(
  //       data => {
  //         console.log(data);
  //         this.customer = data as Customer;
  //       },
  //       error => console.log(error));
  // }

  delete(index:number) {
    let id = this.products[index].productId

    this.customerService.deleteCustomer(id)
      .subscribe(
        data => {
          console.log(data);
          //this.listComponent.reloadData();
          window.location.reload
        },
        error => console.log(error));
        window.location.reload();
  }
  addtoCart(index:number) {
    let pid = this.products[index].productId
    let amt = this.products[index].amount
    this.customerService.addtoCart(amt,pid)
      .subscribe(
        data => {
          console.log(data);
          //this.listComponent.reloadData();
         
        },
        error => console.log(error));
        window.location.reload();
  }
}
