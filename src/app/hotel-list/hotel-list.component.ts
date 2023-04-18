import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent {
  endPoint:any;
  hotelEndPoint='hotelDetails';
  hotelDetails: any;
  
  headings=['hotelName','ownerName','hotelContactNo','hotelAddress','hotelEmail','password','totalRooms','speciality'];
 
 
  
  constructor(private dataservice:DataServiceService, private http:HttpClient,
     private router: Router){}

ngOnInit(){
  this.hotelData();
}
  async hotelData(){
    this.hotelDetails =  await this.dataservice.getApiCallData(this.hotelEndPoint).toPromise()

    console.log('hotelDetails',this.hotelDetails);
    
  }

  

}



