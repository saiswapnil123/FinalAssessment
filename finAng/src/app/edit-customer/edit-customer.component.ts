import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CustomerServiceService } from '../customer-service.service';
import {customer} from '../customer';
@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  constructor(private customerService : CustomerServiceService) { }

  form = new FormGroup({
    FirstName : new FormControl(),
    LastName : new FormControl(),
    Address : new FormControl(),
    City : new FormControl(),
    State : new FormControl(),
    Email : new FormControl()
  });
  ngOnInit(): void {
  }
  customer = new customer;
  Delete()
  {
    const FirstName = this.form.value.FirstName;
    this.customerService.DeleteDetails(FirstName).subscribe();
  }
  Update(){
    this.customer.FirstName = this.form.value.FirstName;
    this.customer.LastName = this.form.value.LastName;
    this.customer.Address = this.form.value.Address;
    this.customer.City = this.form.value.City;
    this.customer.State = this.form.value.State;
    this.customer.Email = this.form.value.Email;
    this.customerService.UpdateDetails(this.customer).subscribe((post)=>{
      console.log(post);
    }); 
  }
  

}
