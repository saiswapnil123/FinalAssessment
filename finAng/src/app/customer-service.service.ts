import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { customer } from './customer';
@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private http : HttpClient) { }

  GetDetails(){
    console.log("In service");
    return this.http.get('http://localhost:3000/select');
  }
  UpdateDetails(data:customer){
    console.log("In service");
    return this.http.put('http://localhost:3000/update/'+data.FirstName,data);
  }
  DeleteDetails(FirstName){
    console.log("In service");
    return this.http.delete('http://localhost:3000/delete/'+FirstName);
  }
  PostDetails(data : customer){
    console.log("In service");
    return this.http.post('http://localhost:3000/insert',data);
  }
}
