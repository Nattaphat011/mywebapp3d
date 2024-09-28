import { Component } from '@angular/core';
import { AuthService } from '../auth.service'; // นำเข้า AuthService
import { Router } from '@angular/router';

@Component({
  selector: 'app-accoust',
  templateUrl: './accoust.component.html',
  styleUrl: './accoust.component.css'
})
export class AccoustComponent  {
  user: any = {
    addresses: [],
  };
  constructor(private authService: AuthService, private router: Router) {}


  logout(): void {
    this.authService.logout(); // เรียกใช้ฟังก์ชัน logout
    this.router.navigate(['/login']); // เปลี่ยนเส้นทางไปยังหน้าล็อกอิน
  }
}