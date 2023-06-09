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
  showPassword:boolean =false;
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
  name:['',[Validators.required, Validators.minLength(2),Validators.pattern("[a-zA-Z ]*$")]],
  password:['',[Validators.required]]
  })

 }
   async submit(){
  console.log('login',this.loginform.value);
  this.getApiData = await this.dataservice.getApiCallData(this.endPoint).toPromise();
  this.dataservice.userName = this.loginform.value.name;
    
  let loginData = this.getApiData.find((ele:any)=>{
   return ele.name === this.loginform.value.name && ele.Password === this.loginform.value.password
  })
  if(loginData){
      // this.dataservice.formName = this.loginform.value.name;
    if (this.endPoint == 'admin') {
      alert('login successfully');
      this.router.navigateByUrl('/admin/loginsuccess')
    }
    else if (this.endPoint == 'owner') {
      alert('login successfully');
      this.dataservice.ownerName = this.loginform.value.name;
      this.router.navigateByUrl('/owner/loginsuccess')
    }
    else {
      this.router.navigateByUrl('/user/loginsuccess')
    }
  }
  else{
    alert('User Not Found')
    this.router.navigateByUrl('/signin')
  }
 }
 back(){
  this.dataservice.signInOrSignUp;

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
 visiblity(){
  this.showPassword = !this.showPassword;
 }
}