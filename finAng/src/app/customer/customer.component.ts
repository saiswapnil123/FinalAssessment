import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from '../customer-service.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
posts;
  constructor(private customerService : CustomerServiceService) { }

  ngOnInit(): void {
    this.customerService.GetDetails().subscribe((post)=>{
      console.log(post);
      this.posts = post;
    });

  }

}
