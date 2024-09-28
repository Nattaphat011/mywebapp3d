import { Component } from '@angular/core';
import { AuthService } from '../auth.service'; // นำเข้า AuthService
import { Router } from '@angular/router';

@Component({
  selector: 'app-accoust2',
  templateUrl: './accoust2.component.html',
  styleUrl: './accoust2.component.css'
})
export class Accoust2Component  {
  user: any = {
    addresses: [],
  };
  constructor(private authService: AuthService, private router: Router) {}

  logout(): void {
    this.authService.logout(); // เรียกใช้ฟังก์ชัน logout
    this.router.navigate(['/login']); // เปลี่ยนเส้นทางไปยังหน้าล็อกอิน
  }
}