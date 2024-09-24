import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {
    const token = localStorage.getItem('token');
    
    // ตรวจสอบว่าผู้ใช้เข้าสู่ระบบแล้วหรือยัง
    if (token) {
      this.router.navigate(['/account']); // หากเข้าสู่ระบบแล้ว ให้เปลี่ยนเส้นทางไปหน้าบัญชี
      return false;
    }
    
    return true;
  }
}
