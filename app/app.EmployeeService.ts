import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product} from './product';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = 'http://localhost:9090/';
  user1:any;
  object={
    "userId":"101",
    "productId": "222"
    

}
  object1: any;
  object2:any;
  constructor(private http: HttpClient) { }
 
  createWishList(product: Product): Observable<any> {
     
    return this.http.post<any>(`${this.baseUrl}` + `/new`, this.object );
  }

  // updateCustomer(mobileno: number, account: Account): Observable<Object> {
  //   console.log("Object"+account);
  //   console.log("Account id"+account.aid)
  //   console.log("Account id"+account.mobile)
  //   let object={
  //       "aid": account.aid,
  //       "mobile": account.mobile,
  //       "accountholder": account.accountholder,
  //       "balance": account.balance
  //   } 
  //   console.log(account);
  //   return this.http.post('http://localhost:5000/accounts/update', object);
  // }

  deleteCustomer(productId: any): Observable<any> {
    let object1={
      "userId":"103",
      "productId": productId
  }
    return this.http.post(`${this.baseUrl}/remove`,this.object1);
  }


  addtoCart(amount:any,productId: any): Observable<any> {
    let object2={
      "userId":"103",
      "productId": productId,
      "amount":amount
  }
    return this.http.post(`${this.baseUrl}/addProductToNewCart/create`,this.object2);
  }




  getproductsList(): Observable<any> {
    let user1={
      "userid":"101"
    }
    return this.http.get(`${this.baseUrl}/getWishlist`,this.user1);
  }

  // getCustomersByMobile(mobileno: any): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/find/${mobileno}`);
  // }

  

  // deposite(mobile: any,amount:any): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/mobileno/${mobile}/amount/${amount}`);
  // }
  
  // withdraw(mobile: any,amount:any): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/withdraw/mobileno/${mobile}/amount/${amount}`);
  // }

  // transfer(from: any,to:any,amount:any): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/from/${from}/to/${to}/amount/${amount}`);
  // }

}
