import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddressService } from '../address.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-address2',
  templateUrl: './address2.component.html',
  styleUrls: ['./address2.component.css']
})
export class Address2Component {
  [x: string]: any;
  addressForm: FormGroup;
  token: any;
  constructor(private fb: FormBuilder, private addressService: AddressService, private authService: AuthService, private router: Router) {
    this.addressForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      telephone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      address: ['', Validators.required],
      sub_district: [''],
      district: [''],
      province: [''],
      zip_code: ['']
    });
  }
  onSubmit() {
    if (this.addressForm.valid) {
      const addressData = this.addressForm.value;
      const token = localStorage.getItem('token');

      if (token) {
        this.addressService.addAddress(addressData, token).subscribe(
          (response) => {
            alert ('Address saved successfully');
            this.addressForm.reset();
          },
          (error: HttpErrorResponse) => {
            alert('Failed to save address: ' + error.message);
          }
        );
  } else {
    alert('You are not authenticated. Please log in.');
    this.router.navigate(['/login']);
  }
 }
}// Logout and navigate to login
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}

