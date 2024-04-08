import { Component } from '@angular/core';
import { RegStuServiceService } from '../../service/reg-stu-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-registerstudent',
  templateUrl: './registerstudent.component.html',
  styleUrls: ['./registerstudent.component.css']
})
export class RegisterstudentComponent {

  hostel: any;
  constructor(private snackBar: MatSnackBar, private activateRoute: ActivatedRoute, private route: Router, private studentService: RegStuServiceService) {
    if (!localStorage.getItem('AdminLoginId')) {
      this.route.navigateByUrl('/Adminlogin');
    }
    this.hostel = this.activateRoute.snapshot.paramMap.get('id');
  }
  registerStudent(data: any) {
    this.studentService.registerStudent(data, this.hostel).subscribe((item) => {
      this.snackBar.open('Student Register successful, 1st Time User Password = Roll Number', 'Close');
    });
  }
}
