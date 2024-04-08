import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../service/admin.service';
import { MatSnackBar } from '@angular/material/snack-bar'; // Step 1

@Component({
  selector: 'app-admin-register',
  templateUrl: './adminregister.component.html',
  styleUrls: ['./adminregister.component.css']
})
export class AdminRegisterComponent {
  admin = {
    username: '',
    password: '',
    hostel: ''
  };

  constructor(
    private adminService: AdminService,
    private router: Router,
    private snackBar: MatSnackBar // Step 2
  ) {}

  registerAdmin() {
    console.log('Register button clicked');
    this.adminService.registerAdmin(this.admin).subscribe(
      (response) => {
        console.log('Admin registered successfully', response);
        this.snackBar.open('Admin registered successfully', 'Close', {
          duration: 3000 // Snackbar duration in milliseconds
        });
        this.router.navigate(['/Adminlogin']);
      },
      (error) => {
        console.error('Error registering admin', error);
        // Handle error, display error message, etc.
      }
    );
  }
  goTologinPage() {
    this.router.navigate(['/Adminlogin']); // Adjust the route according to your configuration
  }
}
