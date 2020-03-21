import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from '../customer-service.service';
import {customer} from '../customer';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  constructor(private customerService : CustomerServiceService) { }

  ngOnInit(): void {
  }
  customer = new customer;
  form = new FormGroup({
    FirstName : new FormControl(),
    LastName : new FormControl(),
    Address : new FormControl(),
    City : new FormControl(),
    State : new FormControl(),
    Email : new FormControl()
  });
  Insert(){
      this.customer.FirstName = this.form.value.FirstName;
      this.customer.LastName=this.form.value.LastName;
      this.customer.Address = this.form.value.Address;
      this.customer.City = this.form.value.City;
      this.customer.State = this.form.value.State;
      this.customer.Email = this.form.value.Email;
      this.customerService.PostDetails(this.customer).subscribe();;
    }
  }


