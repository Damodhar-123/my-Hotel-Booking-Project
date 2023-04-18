import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { SignInComponent } from '../sign-in/sign-in.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { NewHotelRegisterComponent } from './new-hotel-register/new-hotel-register.component';
import { OwnerComponent } from './owner.component';

const routes: Routes = [
  { path: '', component: OwnerComponent },
  { path: 'home', component: HomeComponent },
  {path: 'signin',component:SignInComponent},
  {path:'signup',component:SignUpComponent},
  {path: 'loginsuccess', component:LoginsuccessComponent},
  {path:'newHotelRegistration', component: NewHotelRegisterComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
