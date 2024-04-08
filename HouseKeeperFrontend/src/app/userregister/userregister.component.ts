import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar'; // Import MatSnackBar
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserRegisterComponent {
  user = {
    rollnumber: '',
    password: '',
    hostel: '',
    floor: '',
    room: ''
  };

  constructor(
    private userService: UserService,
    private router: Router,
    private snackBar: MatSnackBar // Inject MatSnackBar
  ) {}

  registerStudent() {
    console.log(this.user);
    this.userService.registerStudent(this.user).subscribe(
      (response) => {
        console.log('Student registered successfully', response);
        this.router.navigate(['/Userlogin']);
        this.showSnackbar('Student registered successfully'); // Show Snackbar
      },
      (error) => {
        console.error('Error registering student', error);
        // Handle error, display error message, etc.
      }
    );
  }

  showSnackbar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000, // Duration for which the Snackbar is displayed (in milliseconds)
    });
  }

  goTologinPage() {
    this.router.navigate(['/Userlogin']); // Adjust the route according to your configuration
  }
}
