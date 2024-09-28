import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string = ''; // สำหรับเก็บข้อความข้อผิดพลาด

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder // ใช้ FormBuilder สำหรับสร้างฟอร์ม
  ) {
    // สร้างฟอร์มด้วย FormBuilder
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // ตรวจสอบให้ email ถูกต้อง
      password: ['', Validators.required] // ตรวจสอบให้มี password
    });
  }

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

  onLogin() {
    if (this.loginForm.valid) {
      // ถ้าฟอร์มถูกต้อง
      const credentials = this.loginForm.value; // ดึงค่าจากฟอร์ม
      this.authService.login(credentials).subscribe(
        response => {
          console.log('Login successful!', response);
          localStorage.setItem('token', response.token); // เก็บ token ลงใน localStorage
          this.router.navigate(['/account']); // เปลี่ยนเส้นทางไปยังหน้าบัญชี
        },
        error => {
          console.error('Login failed', error);
          this.errorMessage = 'Login failed. Please check your credentials.'; // แสดงข้อความข้อผิดพลาด
        }
      );
    } else {
      this.errorMessage = 'Please fill in all required fields.'; // แสดงข้อความข้อผิดพลาดเมื่อฟอร์มไม่ถูกต้อง
    }
  }
}
