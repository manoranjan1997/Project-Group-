import { Component } from '@angular/core';
import { CleanRequestService } from '../../service/clean-request.service';
import { FeedbackService } from '../../service/feedback.service'; // Import the FeedbackService
import { Router } from '@angular/router';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent {

  cleanRequestData: any = [];
  rollnumber: any;

  constructor(
    private cleanService: CleanRequestService,
    private feedbackService: FeedbackService, // Inject the FeedbackService
    private route: Router
  ) {
    if (!localStorage.getItem('UserLoginId')) {
      this.route.navigateByUrl('/Userlogin')
    }
    this.rollnumber = localStorage.getItem('UserLoginId');
    this.cleanService.getCleanRequestByRollnumber(this.rollnumber).subscribe((item) => {
      this.cleanRequestData = item;
    });

    // Now you can use the feedbackService methods here if needed
  }
}