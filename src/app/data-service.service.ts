import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  url='http://localhost:3000/';
  constructor(private http:HttpClient) { }

  postApiCall(endPoint:any,data:any){
    let updateUrl = this.url + endPoint;
    return this.http.post(updateUrl , data)
   }
}