import { Component } from '@angular/core';
import { RegHouseKeeperServiceService } from '../../service/reg-house-keeper-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register-housekeeper',
  templateUrl: './register-housekeeper.component.html',
  styleUrls: ['./register-housekeeper.component.css'],
})
export class RegisterHousekeeperComponent {
  hostel: any;
  WorkerDetails: any;
  floor: any;
  name: any;
  getWorkerDetailsByFloor: any;
  getWorkerByNameAndFloor: any;
  refreshWorkerDetails: any;

  constructor(
    private snackBar: MatSnackBar,
    private route: Router,
    private houseKeeperService: RegHouseKeeperServiceService,
    private activateRoute: ActivatedRoute
  ) {
    if (!localStorage.getItem('AdminLoginId')) {
      this.route.navigateByUrl('/adminlogin');
    }
    this.hostel = this.activateRoute.snapshot.paramMap.get('id');
    this.houseKeeperService
      .getWorkerByNameAndFloor(this.hostel)
      .subscribe((item) => {
        this.WorkerDetails = item;
      });
  }

  registerHousekeeper(data: any) {
    this.houseKeeperService
      .registerHousekeeper(data, this.hostel)
      .subscribe((item) => {
        this.snackBar.open('Housekeeper Register successful', 'Close');
        // this.getWorkerDetailsByFloor();
      });
  }
}