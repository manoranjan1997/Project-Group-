import { Component } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {FeedbackService} from '../../service/feedback.service'
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
hostel:any;
AllFeedback:any;
  constructor(private router:Router,private route:ActivatedRoute,private feedbackService:FeedbackService){
    if(!localStorage.getItem('AdminLoginId')){
      this.router.navigateByUrl('/Adminlogin')
    }
    this.hostel=this.route.snapshot.paramMap.get('id');
    this.feedbackService.getAllFeedbackByHostel(this.hostel).subscribe((item)=>{
      this.AllFeedback=item;
    })                                                                                                                        
  }
}
