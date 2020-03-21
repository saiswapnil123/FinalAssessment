import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{Routes,RouterModule} from'@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { CustomerServiceService } from './customer-service.service';
import {ReactiveFormsModule} from '@angular/forms';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';

const routes : Routes =[
  {path:'', redirectTo:'customers', pathMatch:'full'},
  {path:'customers',component:CustomerComponent},
  {path:'Update',component:UpdateCustomerComponent},
  {path:'Edit/:FirstName',component:EditCustomerComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    EditCustomerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CustomerServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
