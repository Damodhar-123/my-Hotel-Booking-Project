import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelBookingComponent } from './hotel-booking/hotel-booking.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  { path: '', component: UserComponent },
  {path: 'loginsuccess',component:LoginsuccessComponent},
  { path: 'hotelBooking',component:HotelBookingComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
