import { Component, OnInit } from '@angular/core';
import {FeedbackService} from '../../service/feedback.service';
import {CleanRequestService} from '../../service/clean-request.service'; 
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent implements OnInit {

  data:any;
  cleanRequestData:any;
  requestId:any;
  constructor(private feedbackService:FeedbackService, private cleanService:CleanRequestService,private route:ActivatedRoute,private router:Router){
    if(!localStorage.getItem('UserLoginId')){
      this.router.navigateByUrl('/Userlogin')
    }
  
    this.requestId=this.route.snapshot.paramMap.get('id');
    this.cleanService.getRequestById(this.requestId).subscribe((data)=>{
      this.cleanRequestData=data;
    })
  }
  submitFeedback(data:any){
    this.feedbackService.submitFeedback(data,this.requestId).subscribe(()=>{
      this.router.navigateByUrl('/user/home')
    })  
    console.log(data)
  }

  ngOnInit(): void {
    if(localStorage.getItem('loginidp')){
      console.log('hello');
    }
     this.data= localStorage.getItem('loginidpass');
     console.log(this.data);
  }
}
