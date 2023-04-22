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
  
  headings=['HotelName','OwnerName','HotelContactNo','HotelAddress','HotelEmail','TotalRooms','Speciality'];
  endpoint: any;
  inputBoxValue:any;
  hotelDetailsById: any;
 
 
  
  constructor(private dataservice:DataServiceService, private http:HttpClient,
     private router: Router){}

ngOnInit(){
  this.endpoint = this.dataservice.endPoint;
  this.hotelData();
}
  async hotelData(){
    this.hotelDetails =  await this.dataservice.getApiCallData(this.hotelEndPoint).toPromise()

    console.log('hotelDetails',this.hotelDetails);
    
  }
  async delete(id:any){
    await this.dataservice.deleteApiCall(this.hotelEndPoint,id).toPromise();
    this.hotelData();

  }

    async editJourney(id:number){
      this.dataservice.editId = id;
      this.dataservice.editJourney = true;
     
     this.hotelDetailsById =  await this.dataservice.getApiCallData(this.hotelEndPoint, id).toPromise();
       console.log('  this.hotelDetailsById-->',  this.hotelDetailsById);
       this.dataservice.hotelDetailsById =  this.hotelDetailsById ;
       this.router.navigateByUrl('/owner/newHotelRegistration');
    
    
  }

  Back(){
    if (this.endpoint == 'admin') {
      this.router.navigateByUrl('/admin/loginsuccess');
    }
    else if (this.endpoint == 'owner') {
      this.router.navigateByUrl('/owner/loginsuccess');
    }
    else {
      this.router.navigateByUrl('/owner/loginsuccess');
    }
  }

}



