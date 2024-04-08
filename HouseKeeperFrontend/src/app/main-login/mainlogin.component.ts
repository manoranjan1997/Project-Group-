import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
selector: 'app-mainlogin',
templateUrl: './mainlogin.component.html',
styleUrls: ['./mainlogin.component.css']
})
export class MainloginComponent implements OnInit {

constructor(private router: Router) { }

ngOnInit(): void {
   // Slider script
   const slider = document.querySelector('.slider') as HTMLElement;
   let slideIndex = 0;

   function showSlide(index: number) {
     slider.style.transform = `translateX(-${index * 100}%)`;
   }

   function nextSlide() {
     slideIndex = (slideIndex + 1) % 5;
     showSlide(slideIndex);
   }

   setInterval(nextSlide, 5000);
}

goToAdminLogin() {
this.router.navigate(['/Adminlogin']);
}

goToStudentLogin() {
this.router.navigate(['/Userlogin']);
}
}