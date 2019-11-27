import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {  Observable } from 'rxjs';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customerform: FormGroup;
  validMessage: string = "";

  constructor(private customerService: CustomerService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.customerform = this.formBuilder.group({
      first_name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      address: this.formBuilder.group({
        street_number: new FormControl('', Validators.required),
        street_name: new FormControl('', Validators.required),
        city: new FormControl('', Validators.required),
        state: new FormControl('', Validators.required),
        zip: new FormControl('', Validators.required),
      })
    })
  }


submitCustomer(){
  if (this.customerform.valid){
    this.validMessage = "Your Customer Form Has Been Submitted. Thank You!";
    this.customerService.createCustomer(this.customerform.value).subscribe(data => {
      console.log(data);
      this.customerform.reset();
      return true; 
  },
  error => {
    Observable.throw(error);
    }
    )

  } else {
    this.validMessage = "Please Fill Out The Form Before Submitting!";
  }
}
}

