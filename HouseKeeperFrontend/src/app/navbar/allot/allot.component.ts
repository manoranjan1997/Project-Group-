import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CleanRequestService } from '../../service/clean-request.service';
import { RegHouseKeeperServiceService } from '../../service/reg-house-keeper-service.service';
@Component({
  selector: 'app-allot',
  templateUrl: './allot.component.html',
  styleUrls: ['./allot.component.css'],
})
export class AllotComponent {
  requestId: any;
  cleanRequestData: any;
  houseKeeper: any;
  hostel: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cleanService: CleanRequestService,
    private housekeeperService: RegHouseKeeperServiceService
  ) {
    if (!localStorage.getItem('AdminLoginId')) {
      this.router.navigateByUrl('/Adminlogin');
    }
    this.requestId = this.route.snapshot.paramMap.get('id');
    this.hostel = this.route.snapshot.paramMap.get('hostel');
    this.cleanService.getRequestById(this.requestId).subscribe((item) => {
      this.cleanRequestData = item;
      this.housekeeperService
        .getHouseKeeperByFloor(this.cleanRequestData.student.floor, this.hostel)
        .subscribe((data) => {
          console.log(data);
          this.houseKeeper = data;
        });
    });
  }
  allotHouseKeeper(data: any) {
    this.cleanService
      .allotHouseKeeper(this.cleanRequestData.request_id, data.houseKeeperId)
      .subscribe((item) => {
        this.router.navigateByUrl('/admin/home');
      });
  }
}
