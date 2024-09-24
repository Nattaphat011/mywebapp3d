import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';

  ngOnInit(): void {
    // ตรวจสอบว่าผู้ใช้เข้าสู่ระบบแล้วหรือไม่
    if (this.authService.isLoggedIn()) {
      // เปลี่ยนเส้นทางไปยังหน้าบัญชีของผู้ใช้
      this.router.navigate(['/account']); // เปลี่ยนเป็นเส้นทางหน้าบัญชีของคุณ
    }
  }
  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
  constructor(private authService: AuthService, private router: Router) {}
  onLogin() {
    this.authService.login({ email: this.email, password: this.password }).subscribe(
      response => {
        console.log('Login successful!', response);
        localStorage.setItem('token', response.token);
        this.router.navigate(['/account']);
      },
      error => {
        console.error('Login failed', error);
      }
    );
  }
}