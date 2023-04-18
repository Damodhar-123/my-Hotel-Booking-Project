import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-new-hotel-register',
  templateUrl: './new-hotel-register.component.html',
  styleUrls: ['./new-hotel-register.component.css']
})
export class NewHotelRegisterComponent {
  hotelRegistration! :FormGroup;
  endPoint= 'hotelDetails';
   
  constructor(private fb:FormBuilder, private dataservice:DataServiceService){}

ngOnInit(){
//  this.endPoint = this.dataservice.endPoint;
  this.registrationForm();
}
registrationForm(){
 this.hotelRegistration = this.fb.group({

  hotelName:[''],
  ownerName:[''],
  hotelContactNo:[''],
  hotelAddress:[''],
  hotelEmail:[],
  password:[],
  totalRooms:[],
  speciality:[]
  

 })
}
submit(){
   let endPoint= 'hotelDetails';
  this.dataservice.postApiCall(endPoint,this.hotelRegistration.value).subscribe(res=>{})
  console.log(this.hotelRegistration.value);
  

}

}
