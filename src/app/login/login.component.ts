import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}
  onLogin() {
    this.authService.login({ email: this.email, password: this.password }).subscribe(
      response => {
        console.log('Login successful!', response);
        localStorage.setItem('token', response.token); // เก็บ token ลงใน localStorage
        this.router.navigate(['/header']); // เปลี่ยนเส้นทางไปยังหน้าหลัก
      },
      error => {
        console.error('Login failed', error);
      }
    );
  }
}