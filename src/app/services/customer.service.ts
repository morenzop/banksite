import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ResponseData } from '../models/ResponseData';
import { Customer } from '../models/customer';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl = '/server/';

  constructor( private http: HttpClient) { }

  createCustomer(customers){
    return this.http.get<ResponseData>(this.apiUrl + customers);
  }
  getCustomer(customerId: number){
    return this.http.get<ResponseData>(this.apiUrl + 'customers/' + customerId);
  }
  updateCustomer(customer: Customer, customerId: number){
    const body = JSON.stringify(customer);
    return this.http.put(this.apiUrl + 'customers/' + customerId, body, httpOptions);
  }
  deleteCustomer(customerId: number){
    return this.http.delete(this.apiUrl + 'customers/' + customerId);
  }
}
