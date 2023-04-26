import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.css']
})
export class LoginsuccessComponent {
  signInOrSignUp: any;
  endPoint: any;
  loginform: any;
  // formName : any;
  userName: any;
  constructor(private dataservice:DataServiceService, private router: Router){

  }
  ngOnInit(){
    this.endPoint =this.dataservice.endPoint;
    this.userName = this.dataservice.userName;
  
    
  }
  
    back(){
      this.signInOrSignUp = this.dataservice.signInOrSignUp;
      if(this.signInOrSignUp =='signup'){
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

