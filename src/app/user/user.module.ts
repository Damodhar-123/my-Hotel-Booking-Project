import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { MatButtonModule } from '@angular/material/button';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { HotelBookingComponent } from './hotel-booking/hotel-booking.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import {  MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { DateAdapter, MatNativeDateModule } from '@angular/material/core';
import { NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    UserComponent,
    LoginsuccessComponent,
    HotelBookingComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRadioModule,
    MatFormFieldModule,
    MatSelectModule,
    MatNativeDateModule,
    NgbDatepicker
    
  
    
  ]
})
export class UserModule { }
