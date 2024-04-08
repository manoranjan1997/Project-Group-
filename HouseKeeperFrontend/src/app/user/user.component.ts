import { Component, OnInit } from '@angular/core';
import {faTelegram} from '@fortawesome/free-brands-svg-icons';
import {faCreditCardAlt} from '@fortawesome/free-regular-svg-icons';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faAddressBook} from '@fortawesome/free-regular-svg-icons';
import {faRunning} from '@fortawesome/free-solid-svg-icons';
import {faChartBar} from '@fortawesome/free-solid-svg-icons';
import {faChartPie} from '@fortawesome/free-solid-svg-icons';
import {CleanRequestService} from '../service/clean-request.service';
import {FeedbackService} from '../service/feedback.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  {

  AllotIcon:any=faTelegram;
  ComplaintsIcon:any=faCreditCardAlt;
  StudentIcon:any=faUser;
  LogoutIcon:any=faRunning;
  HousekeeperIcon:any=faAddressBook;
  CleanRequestIcon:any=faChartBar;
  ComplaintsDivIcon:any=faChartPie;
  complaintCount:any;
  feedbackCount:any;
  rollnumber:any;
  constructor(private snackBar: MatSnackBar, private route:Router,private cleanService:CleanRequestService,private feedbackService:FeedbackService){
    if(!localStorage.getItem('UserLoginId')){
      this.route.navigateByUrl('/Userlogin')
    }
    this.rollnumber=localStorage.getItem('UserLoginId');
    this.cleanService.countRequest(this.rollnumber).subscribe((item)=>{
      this.complaintCount=item;
    })
    this.feedbackService.getFeedbackCountByRollnumber(this.rollnumber).subscribe((item)=>{
      this.feedbackCount=item;
    })
  }
 
  logout(){
    localStorage.removeItem('UserLoginId');
    this.route.navigateByUrl('/Userlogin')
        // Display snack bar when logout is successful
        this.snackBar.open("You've been Logged Out Successfully", 'Close', {
          duration: 3000, // Set the duration in milliseconds
        });
  }
}
