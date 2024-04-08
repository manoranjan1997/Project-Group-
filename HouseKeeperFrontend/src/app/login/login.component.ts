import { Component } from '@angular/core';
import { faBowlFood } from '@fortawesome/free-solid-svg-icons';
import { LoginServiceService } from '../service/login-service.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar'; // Import MatSnackBar

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  logo = faBowlFood;
  adminLoginImage: string = 'assets/images/Login.avif';
  adminId: any;
  notMatch: any;
  

  constructor(private loginService: LoginServiceService, private router: Router, private snackBar: MatSnackBar) {
    if (localStorage.getItem('AdminLoginId')) {
      this.router.navigateByUrl('/admin/home');
    }
  }

  goToMainPage() {
    this.router.navigate(['/mainlogin']); // Adjust the route according to your configuration
  }
  backToSignup(){
    this.router.navigate(['/admin/register'])
  }

  checkAdmin(data: any) {
    if (localStorage.getItem('AdminLoginId')) {
      this.router.navigateByUrl('/admin/home');
    }
    this.loginService.checkAdmin(data).subscribe(
      (item) => {
        this.adminId = item;
        localStorage.setItem('AdminLoginId', this.adminId.admin_id);
        this.router.navigateByUrl('/admin/home');
        this.snackBar.open('Login Successful, Welcome Back Admin!!', 'Close', {
          duration: 5000, // Adjust the duration as needed
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
