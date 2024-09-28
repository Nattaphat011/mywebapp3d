import { Component, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(private authService: AuthService, private router: Router) { }
  @ViewChild('homeSection', { static: false }) homeSection!: ElementRef;
  scrollToSection4() {
    this.homeSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
