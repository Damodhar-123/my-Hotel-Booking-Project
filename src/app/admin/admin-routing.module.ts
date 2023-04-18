import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { HotelListComponent } from '../hotel-list/hotel-list.component';
import { SignInComponent } from '../sign-in/sign-in.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { AdminComponent } from './admin.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component:SignUpComponent},
  { path : 'signin', component:SignInComponent},
  { path:'loginsuccess',component:LoginsuccessComponent},
  {path:'hotel-list',component:HotelListComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
