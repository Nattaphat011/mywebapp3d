import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }
  
  onRegister() {
    if (this.registerForm.invalid) {
      console.log('Form is not valid');
      return;
    }

    if (this.registerForm.value.password !== this.registerForm.value.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const newUser = {
      firstName: this.registerForm.value.firstName,
      lastName: this.registerForm.value.lastName,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password
    };

    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (!emailPattern.test(this.registerForm.value.email)) {
      alert('Invalid email format!');
      return;
    }

    this.authService.register(newUser).subscribe(
      response => {
        console.log('Registration successful!', response);
        alert('สมัครเสร็จสิ้น เข้าสู่ระบบได้เลย!!');
        // Redirect to login page after successful registration
        this.router.navigate(['/login']); // Adjust the path as necessary
      },
      error => {
        console.error('Registration failed', error);
        alert('Registration failed: ' + error.error.message);
      }
    );
  }
}