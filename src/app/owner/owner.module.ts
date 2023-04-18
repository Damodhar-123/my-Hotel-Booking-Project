import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerComponent } from './owner.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { NewHotelRegisterComponent } from './new-hotel-register/new-hotel-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    OwnerComponent,
    LoginsuccessComponent,
    NewHotelRegisterComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule
  ]
})
export class OwnerModule { }
