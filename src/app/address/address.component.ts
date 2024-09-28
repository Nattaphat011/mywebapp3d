import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'; // นำเข้า AuthService
import { Router } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrl: './address.component.css'
})
export class AddressComponent {
  user: any = {
    addresses: [],
  };
  constructor(private authService: AuthService, private router: Router) {}
  logout(): void {
    this.authService.logout(); // เรียกใช้ฟังก์ชัน logout
    this.router.navigate(['/login']); // เปลี่ยนเส้นทางไปยังหน้าล็อกอิน
  }

}
