import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-address2',
  templateUrl: './address2.component.html',
  styleUrls: ['./address2.component.css'] // แก้ไข styleUrl เป็น styleUrls
})
export class Address2Component implements OnInit {
  addresses: any[] = [];
  selectedAddress: any = null;
  newAddress: any = {}; // ตัวแปรสำหรับที่อยู่ใหม่
  userId = 1; // เปลี่ยน userId ให้ตรงกับผู้ใช้ที่ล็อกอินอยู่

  constructor(private addressService: AddressService, private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.authService.getUsers(); 
    this.loadAddresses();
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  
  loadAddresses() {
    this.addressService.getAddress(this.userId).subscribe(
      (data: any[]) => {
        console.log('Addresses loaded:', data); // เพิ่มการแสดงผลข้อมูลที่ดึงมาได้
        this.addresses = data;
      },
      error => {
        console.error('Error loading addresses:', error);
        console.log('Error message:', error.message); // แสดงรายละเอียดของ error
      }
    );
  }

  
  
  // loadAddresses() {
  //   const userId = 1; // เปลี่ยน userId ให้ตรงกับผู้ใช้ที่ล็อกอินอยู่
  //   this.addressService.getAddress(userId).subscribe(
  //     (data: any[]) => {
  //       this.addresses = data;
  //     },
  //     error => {
  //       console.error('Error loading addresses:', error);
  //     }
  //   );
  // }

  deleteAddress(addressId: number) {
    if (confirm('คุณแน่ใจหรือไม่ที่จะลบที่อยู่นี้?')) {
      this.addressService.deleteAddress(addressId).subscribe(
        (response: { message: string }) => {
          console.log(response.message);
          this.loadAddresses(); // โหลดรายการที่อยู่อีกครั้ง
        },
        error => {
          console.error('Error deleting address:', error);
        }
      );
    }
  }

  editAddress(address: any) {
    this.selectedAddress = { ...address }; // ทำสำเนาของข้อมูลที่อยู่ที่ต้องการแก้ไข
  }

  saveAddress() {
    if (this.selectedAddress && this.selectedAddress.id) {
      this.addressService.updateAddress(this.selectedAddress.id, this.selectedAddress).subscribe(
        (response: { message: string }) => {
          console.log(response.message);
          this.loadAddresses(); // โหลดรายการที่อยู่อีกครั้ง
          this.selectedAddress = null; // รีเซ็ตการแก้ไข
        },
        error => {
          console.error('Error saving address:', error);
        }
      );
    }
  }

  addAddress() {
    // เพิ่ม userId ให้กับที่อยู่ใหม่ก่อนส่งไปยัง backend
    this.newAddress.userId = this.userId;
    this.addressService.addAddress(this.newAddress).subscribe(
      (response: { message: string }) => {
        console.log(response.message);
        this.loadAddresses(); // โหลดรายการที่อยู่อีกครั้ง
        this.newAddress = {}; // รีเซ็ตที่อยู่ใหม่
      },
      error => {
        console.error('Error adding address:', error);
      }
    );
  }
}
