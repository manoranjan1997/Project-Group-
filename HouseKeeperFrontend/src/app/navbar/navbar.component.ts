import { Component } from '@angular/core';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faCreditCardAlt } from '@fortawesome/free-regular-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faAddressBook } from '@fortawesome/free-regular-svg-icons';
import { faRunning } from '@fortawesome/free-solid-svg-icons';
import { faChartBar } from '@fortawesome/free-regular-svg-icons';
import { faChartPie } from '@fortawesome/free-solid-svg-icons';
import { CleanRequestService } from '../service/clean-request.service';
import { FeedbackService } from '../service/feedback.service';
import { LoginServiceService } from '../service/login-service.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  AllCleanRequest: any;
  AllFeedbackCount: any;
  AllotIcon: any = faTelegram;
  ComplaintsIcon: any = faCreditCardAlt;
  StudentIcon: any = faUser;
  LogoutIcon: any = faRunning;
  HousekeeperIcon: any = faAddressBook;
  CleanRequestIcon: any = faChartBar;
  ComplaintsDivIcon: any = faChartPie;
  AdminDetails: any;
  AdminId: any;

  constructor(private cleanService: CleanRequestService, private feedbackService: FeedbackService,
              private loginService: LoginServiceService, private route: Router,
              private snackBar: MatSnackBar) {
    if (!localStorage.getItem('AdminLoginId')) {
      this.route.navigateByUrl('/Adminlogin');
    }
    this.AdminId = localStorage.getItem('AdminLoginId');
    this.loginService.getAdminById(this.AdminId).subscribe((item) => {
      this.AdminDetails = item;
      this.cleanService.getAllCount(this.AdminDetails.hostel).subscribe((item) => {
        this.AllCleanRequest = item;
      });

      this.feedbackService.getFeedbackCount(this.AdminDetails.hostel).subscribe((data) => {
        this.AllFeedbackCount = data;
      });
    });
  }

  logout() {
    localStorage.removeItem('AdminLoginId');
    this.route.navigateByUrl('/Adminlogin');

    // Display snack bar when logout is successful
    this.snackBar.open("You've been Logged Out Successfully", 'Close', {
      duration: 3000, // Set the duration in milliseconds
    });
  }
}
