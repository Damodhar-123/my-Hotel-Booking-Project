import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.css']
})
export class LoginsuccessComponent {
 endPoint: any;
  signInOrSignUp: any;
  
 constructor(private dataservice:DataServiceService, private router:Router){

 }
 ngOnInit(){
  this.endPoint =this.dataservice.endPoint;
  this.signInOrSignUp = this.dataservice.signInOrSignUp;
}

  back(){
    if(this.signInOrSignUp =='signup'){
      this.router.navigateByUrl("/signup")
    }
    else{
      this.router.navigateByUrl('/signin')
    }

 }
 viewHotels(){

 }
}