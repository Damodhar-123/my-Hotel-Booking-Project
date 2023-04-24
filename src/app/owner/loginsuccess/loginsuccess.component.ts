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
  hotelDetails: any;
  hotelDetailsByOwner:any =[];
  ownerName: any;
  hotelEndPoint = 'hotelDetails';
  hotelDetailsById: any;
  headings=['HotelName','OwnerName','HotelContactNo','HotelAddress','HotelEmail','TotalRooms','Speciality'];
  
  
 constructor(private dataservice:DataServiceService, private router:Router){

 }
 ngOnInit(){
  this.endPoint =this.dataservice.endPoint;
  this.signInOrSignUp = this.dataservice.signInOrSignUp;
  this.ownerName = this.dataservice.ownerName;
  console.log('ownerName..',this.ownerName);
  
}

  back(){
      if(this.signInOrSignUp =='signup'){
        this.router.navigateByUrl('/signup');
      }
      else{
        this.router.navigateByUrl('/signin')
      }

 }
 viewHotels(){
  this.dataservice.getApiCallData('hotelDetails').subscribe(res=>{
    console.log('res',res);
    
  })
  this.router.navigateByUrl('/hotel-list')

 }
 async viewMyHotels(){
  this.hotelDetailsByOwner = [];
  this.hotelDetails = await this.dataservice.getApiCallData('hotelDetails').toPromise();
  
if(this.hotelDetails){
  this.hotelDetails.forEach((element:any ) => {
    let name = element.ownerName?.toLowerCase();
      console.log(name);
      let signInName = this.ownerName?.toLowerCase() ;
      console.log('signInName',signInName);
      
      if(name==signInName )
      
      {
        this.hotelDetailsByOwner.push(element);
      }
  });
  console.log('this.hotelDetailsByOwner',this.hotelDetailsByOwner);
  if(this.hotelDetailsByOwner <= 0){
    alert('Hotels Not found....')
  }
  
  //  this.router.navigateByUrl('/hotel-List')
  
}
 }
 async delete(id:any){
  await this.dataservice.deleteApiCall(this.hotelEndPoint,id).toPromise();
  this.viewMyHotels();
  
 }
 
  async editJourney(id:number){
    this.dataservice.editId = id;
    this.dataservice.editJourney = true;
   
   this.hotelDetailsById =  await this.dataservice.getApiCallData(this.hotelEndPoint, id).toPromise();
     console.log('  this.hotelDetailsById-->',  this.hotelDetailsById);
     this.dataservice.hotelDetailsById =  this.hotelDetailsById ;
     this.router.navigateByUrl('/owner/newHotelRegistration');
  }
 }
 

  

