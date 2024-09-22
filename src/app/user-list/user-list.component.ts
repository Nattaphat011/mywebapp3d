import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getUsers().subscribe(data => {
      this.users = data;
    });
  }
}
