import { Component, OnInit } from '@angular/core';
import { RegStuServiceService } from '../../service/reg-stu-service.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  studentData: any;
  rollnumber: any;
  inputBorderColor = 'grey';
  currentBorderColor = 'grey';

  constructor(private snackBar: MatSnackBar, private studentService: RegStuServiceService, private route: Router) {
    if (!localStorage.getItem('UserLoginId')) {
      this.route.navigateByUrl('/Userlogin');
    }
    this.rollnumber = localStorage.getItem('UserLoginId');
    this.studentService.getStudent(this.rollnumber).subscribe((item) => {
      this.studentData = item;
    });
  }
  
  ngOnInit(): void {}
  
  displayStyle = 'none';
  profileDisplayStyle = 'none';

  openPopup() {
    this.displayStyle = 'block';
  }

  closePopup() {
    this.displayStyle = 'none';
  }

  openProfilePopup() {
    this.profileDisplayStyle = 'block';
  }

  closeProfilePopup() {
    this.profileDisplayStyle = 'none';
  }

  changePassword(data: any) {
    if (data.newPassword !== data.confirmPassword) {
      this.inputBorderColor = 'red'
      setInterval(() => {
        this.inputBorderColor = 'grey';
      }, 3000)
    }
    else {
      this.studentService.changePassword(data, this.rollnumber).subscribe(() => {
        this.closePopup()
        this.snackBar.open('Password Change Successful', 'close')
      }, (error) => {
        this.currentBorderColor = 'red';
        setInterval(() => {
          this.currentBorderColor = 'grey';
        }, 3000)
      });

    }

  }

  updateProfile(profileData: any) {
    this.studentService.updateProfile(profileData, this.rollnumber).subscribe(
      () => {
        this.closeProfilePopup();
        this.snackBar.open('Profile Update Successful', 'close');
        this.studentService.getStudent(this.rollnumber).subscribe((item) => {
          this.studentData = item;
        });
      },
      (error) => {
        // Handle error if necessary
      }
    );
  }
}