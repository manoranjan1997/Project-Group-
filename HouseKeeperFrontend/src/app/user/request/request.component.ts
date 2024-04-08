import { Component } from '@angular/core';
import{CleanRequestService} from '../../service/clean-request.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent {

  rollnumber:any;
  constructor(private cleanService:CleanRequestService,private route:Router){
    if(!localStorage.getItem('UserLoginId')){
      this.route.navigateByUrl('/Userlogin')
    }
    this.rollnumber=localStorage.getItem('UserLoginId');
  }
  
  submitRequest(data:any){
    this.cleanService.submitRequest(this.rollnumber,data).subscribe((item)=>{
      this.route.navigateByUrl('/user/home')
    });
  }
}
