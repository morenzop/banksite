import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
// import {Account} from '../models/Account';
import {ResponseData} from '../models/ResponseData';
  
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private apiUrl= '/server/';

  constructor(private http: HttpClient) { }

  findAccountsById(accountId: number){
    return this.http.get<ResponseData>(this.apiUrl + 
      'accounts/' + accountId)
  }
  getAllAccounts(){
    return this.http.get<ResponseData>(this.apiUrl + '/accounts')
  }
  findAllByCustomerId(customerId: number){
    return this.http.get<ResponseData>(this.apiUrl + '/customer/{id}/accounts' + customerId)
  }
  accountExistsById(accountId: number){
    return this.http.get<ResponseData>(this.apiUrl + '/accounts/{id}' + accountId)
  }
  updateAccountInfo(account: Account, accountId: number){
    const body=JSON.stringify(account)
    return this.http.put<ResponseData>(this.apiUrl + '/accounts/{id}' + accountId, body, httpOptions );
  }
  createAccount(account: Account, accountId: number){
    const body= JSON.stringify(account);
    return this.http.post<ResponseData>(this.apiUrl + '/customers/{id}/accounts' + accountId, body, httpOptions)
  }
  deleteAccount(accountId: number){
    return this.http.delete(this.apiUrl + '/accounts/{id}' + accountId)
  }
}
