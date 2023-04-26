import { group } from '@angular/animations';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-hotel-booking',
  templateUrl: './hotel-booking.component.html',
  styleUrls: ['./hotel-booking.component.css']
})
export class HotelBookingComponent {
  bookHotel!: FormGroup;
  rooms = ['Single Room A/C','Single Room Non-A/C','Double Bed Room A/C','Double Bed Room Non-A/C'];
  
  constructor( private dataservice:DataServiceService, private fb:FormBuilder, private router:Router){

  }
  ngOnInit(){
    this.hotelBookingForm();
  }
  hotelBookingForm(){
    this.bookHotel = this.fb.group({
      name:['',[Validators.required, Validators.minLength(2),Validators.pattern('[A-Za-z ]*$')]],
      mobileNo:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('[0-9]*$')]],
      password:['',[Validators.required, Validators.minLength(8)]],
      address:['',[Validators.required]],
      aadharNo:['',[Validators.required,Validators.minLength(12),Validators.maxLength(12),Validators.pattern('[0-9]*$')]],
      roomTypes:[''],
      checkIn: [''],
      checkOut:[''],
      amount:['2000',[Validators.required]],
      
    })

  }
  submit(){
    this.dataservice.postApiCall('hotelBooking',this.bookHotel.value).subscribe(res=>{})
    this.router.navigateByUrl('/user/loginsuccess')
  }

}
