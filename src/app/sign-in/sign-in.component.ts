import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  loginform!: FormGroup;
   endPoint:any;
  getApiData: any;
  // endPoint='admin';
  
  

  constructor(private fb:FormBuilder, private dataservice:DataServiceService, private router:Router)
  {

  }
  ngOnInit(){
   this.endPoint =this.dataservice.endPoint;

    this.login();
}
 login(){
 this.loginform = this.fb.group({
  username:['',[Validators.required, Validators.minLength(2),Validators.pattern("[a-zA-Z]*$")]],
  password:['',[Validators.required]]
  })
//  let endPoint = this.dataservice.Data;
//  console.log('endpoint',endPoint);
 
 }
   async submit(){
  console.log('login',this.loginform.value);
  this.getApiData = await this.dataservice.getApiCallData(this.endPoint).toPromise();
    // let getData = res;
    // console.log("getdata",getData);
    
  
  let loginData = this.getApiData.find((ele:any)=>{
   return ele.name === this.loginform.value.username && ele.Password === this.loginform.value.password
  })
  if(loginData){
    
    if (this.endPoint == 'admin') {
      alert('login successfully');
      this.router.navigateByUrl('/admin/loginsuccess')
    }
    else if (this.endPoint == 'owner') {
      alert('login successfully');
      this.router.navigateByUrl('/owner/loginsuccess')
    }
    else {
      this.router.navigateByUrl('/user/loginsuccess')
    }

    // alert('login successfully');
    // this.router.navigateByUrl('/loginsuccess')
  }
  else{
    alert('User Not Found')
    this.router.navigateByUrl('/signin')
  }
 }
 back(){
  if( this.endPoint === 'admin'){
    this.router.navigateByUrl('/admin')
  }
  else if( this.endPoint === 'owner'){
    this.router.navigateByUrl('/owner')
  }
  else{
    this.router.navigateByUrl('/user')
  }
 }
}