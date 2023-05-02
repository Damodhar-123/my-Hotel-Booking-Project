import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-new-hotel-register',
  templateUrl: './new-hotel-register.component.html',
  styleUrls: ['./new-hotel-register.component.css']
})
export class NewHotelRegisterComponent {
  hotelRegistration! :FormGroup;
  endPoint= 'hotelDetails';
  isEditJourney!:boolean;
  editId!: number;
  hotelDetailsById: any;
  endpoint: any;
   
  constructor(private fb:FormBuilder, private dataservice:DataServiceService, private router:Router){}

ngOnInit(){
//  this.endPoint = this.dataservice.endPoint;
 this.isEditJourney = this.dataservice.editJourney;
 this.editId = this.dataservice.editId;  
 this.hotelDetailsById = this.dataservice.hotelDetailsById;
  this.endpoint = this.dataservice.endPoint;

 if (this.isEditJourney) {
  console.log(' this.hotelDetailsById', this.hotelDetailsById);
  if(this.hotelDetailsById){
    this.registrationForm();
  }
 
}
else{
this.registrationForm()
}

  this.registrationForm();
}

registrationForm(){
 this.hotelRegistration = this.fb.group({

  hotelName:[ this.hotelDetailsById ? this.hotelDetailsById?.hotelName : '',[Validators.required, Validators.pattern(('[a-zA-Z ]*$')),Validators.minLength(2)]],
  ownerName:[ this.hotelDetailsById ? this.hotelDetailsById?.ownerName : '',[Validators.required,Validators.pattern('[a-zA-Z ]*$'),Validators.minLength(2)]],
  hotelContactNo:[this.hotelDetailsById ? this.hotelDetailsById?.hotelContactNo  : '',[Validators.required, Validators.pattern('[0-9]*$'),Validators.minLength(10),Validators.maxLength(10)]],
  hotelAddress:[  this.hotelDetailsById ? this.hotelDetailsById?.hotelAddress : '',[Validators.required]],
  hotelEmail:[ this.hotelDetailsById ? this.hotelDetailsById?.hotelEmail : '', [Validators.required]],
  totalRooms:[ this.hotelDetailsById ? this.hotelDetailsById?.totalRooms : '',[Validators.required]],
  speciality:[ this.hotelDetailsById ? this.hotelDetailsById?.speciality : '']
  

 })
}
submit(){
   let endPoint= 'hotelDetails';
   // new Hotel registration post Api Call
   if(this.isEditJourney == false){
    this.dataservice.postApiCall(endPoint,this.hotelRegistration.value).subscribe(res=>{})
    console.log(this.hotelRegistration.value);
    alert('Hotel Details Submit Successfuly');
    
   }
else{  
  // if edit details Patch Api Call
  let data = {
    hotelContactNo : this.hotelRegistration.value.hotelContactNo,
    totalRooms : this.hotelRegistration.value.totalRooms,
    hotelName :this.hotelRegistration.value.hotelName,
    ownerName : this.hotelRegistration.value.ownerName,
    hotelAddress : this.hotelRegistration.value.hotelAddress,
    hotelEmail : this.hotelRegistration.value.hotelEmail,
    speciality : this.hotelRegistration.value.speciality

  }
  this.dataservice.patchApiCall(endPoint,data,this.editId).subscribe(res=>{})
} 
this.endPoint = this.dataservice.endPoint;
   if( this.dataservice.endPoint == 'owner'){
   alert('Hotel Details Update Successfully')
 this.router.navigateByUrl('/owner/loginsuccess')
   }
 else{
  alert('Hotel Details Changes Successfully')
  this.router.navigateByUrl('/admin/loginsuccess')
 }

   
}
Back(){
  if (this.endpoint == 'admin') {
    this.router.navigateByUrl('/admin/loginsuccess');
  }
  else if (this.endpoint == 'owner') {
    this.router.navigateByUrl('/owner/loginsuccess');
  }
  else {
    this.router.navigateByUrl('/user/loginsuccess');
  }
}

}
