import { Component } from '@angular/core';
import { faBowlFood } from '@fortawesome/free-solid-svg-icons';
import { LoginServiceService } from '../service/login-service.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent {

  logo = faBowlFood;
  adminLoginImage: string = 'assets/images/Login.avif';
  userId: any;
  notMatch: any;

  constructor(private loginService: LoginServiceService, private route: Router,
              private snackBar: MatSnackBar) {
    if (localStorage.getItem('UserLoginId')) {
      this.route.navigateByUrl('/user/home');
    }
  }

  backToSignup(){
    this.route.navigate(['/app/userregister']);
  }
  
  goToMainPage() {
    this.route.navigate(['/mainlogin']); // Adjust the route according to your configuration
  }

  checkUser(data: any) {
    if (localStorage.getItem('UserLoginId')) {
      this.route.navigateByUrl('/user/home');
    }

    this.loginService.checkUser(data).subscribe(
      (item) => {
        this.userId = item;
        localStorage.setItem('UserLoginId', this.userId.rollnumber);
        this.route.navigateByUrl('/user/home');
        
        // Display snack bar when login is successful
        this.snackBar.open('Login Successful!! Welcome Back!', 'Close', {
          duration: 3000, // Set the duration in milliseconds
        });
      },
      (error) => {
        this.notMatch = 'Invalid Login Details';

        setInterval(() => {
          this.notMatch = '';
        }, 3000);
      }
    );
  }
}
