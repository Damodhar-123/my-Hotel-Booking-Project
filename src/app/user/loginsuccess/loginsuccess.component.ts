import { HttpClient } from '@angular/common/http';
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
  signupOrSignIn: any;
  userName: any;
  
  constructor( private dataservice:DataServiceService , private router:Router, private http:HttpClient){
 
 
  }
  ngOnInit(){
    this.endPoint =this.dataservice.endPoint;
    this.signupOrSignIn =this.dataservice.signInOrSignUp;
    this.userName = this.dataservice.formName
  }

  back(){
    if(this.signupOrSignIn =='signup'){
      this.router.navigateByUrl("/signup")
    }
    else{
      this.router.navigateByUrl('/signin')
    }
  }
  viewHotelList(){
    this.router.navigateByUrl('/hotel-list')
  }
}
