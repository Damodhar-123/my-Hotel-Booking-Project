import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  url='http://localhost:3000/';
  endPoint:any;
  signInOrSignUp:any;
  ownerName:any;
  editId!: number;
  editJourney: boolean = false;
  hotelDetailsById: any;
  newRegistration: boolean = false;
  //  formName! :any;
  userName!: any;
  constructor(private http:HttpClient) {
    

   }

  postApiCall(endPoint:any,data:any){
    let updateUrl = this.url + endPoint;
    return this.http.post(updateUrl , data)
   }
   getApiCallData(endPoint:any, id?: number){
    let updateUrl = id? this.url + endPoint + '/'+ id : this.url + endPoint;
   return this.http.get(updateUrl);
  }
  
  deleteApiCall(endPoint : string, id:number){
    let updateUrl = this.url + endPoint + '/' + id;
    return this.http.delete(updateUrl);
  }
  patchApiCall(endPoint:string, data:any, id:number){
    let url = this.url + endPoint + '/' + id ;
    return this.http.patch(url, data)
  }

  }

  

