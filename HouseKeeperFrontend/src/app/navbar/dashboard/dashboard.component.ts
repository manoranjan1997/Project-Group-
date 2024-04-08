import { Component, OnInit } from '@angular/core';
import {CleanRequestService} from '../../service/clean-request.service';
import { Router } from '@angular/router';
import {LoginServiceService} from '../../service/login-service.service'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  implements OnInit{

  AllClientRequestData:any=[];
  AdminDetails:any;
  AdminId:any;
  constructor(private loginService:LoginServiceService,private route:Router,private ClientService:CleanRequestService){
  
  }

  ngOnInit(): void {
    if(!localStorage.getItem('AdminLoginId')){
      this.route.navigateByUrl('/Adminlogin')
    }
    this.AdminId=localStorage.getItem('AdminLoginId');
     this.loginService.getAdminById(this.AdminId).subscribe((item)=>{
      console.log('item',item)
      this.AdminDetails=item;
      this.ClientService.getAllClient(this.AdminDetails.hostel).subscribe((item)=>{
        console.log('api data',item)
        this.AllClientRequestData=item;
      })
     })
  }

 
  



}


