import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'; // นำเข้า AuthService
import { Router } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrl: './address.component.css'
})
export class AddressComponent implements OnInit {
  user: any = {
    addresses: [],
  };
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit(): void {
    // ดึงข้อมูลผู้ใช้จาก API หรือเซ็ตข้อมูลเริ่มต้นที่นี่
    this.user = {
      addresses: ["123 Street, Bangkok"],
    };
  }
  logout(): void {
    this.authService.logout(); // เรียกใช้ฟังก์ชัน logout
    this.router.navigate(['/login']); // เปลี่ยนเส้นทางไปยังหน้าล็อกอิน
  }

}
