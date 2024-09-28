import { Component, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private authService: AuthService, private router: Router) { }
  @ViewChild('homeSection', { static: false }) homeSection!: ElementRef;
  scrollToSection4() {
    this.homeSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
