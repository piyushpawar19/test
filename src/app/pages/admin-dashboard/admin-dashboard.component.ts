import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  searchText: string = '';

  constructor(private router: Router) {}

  logout() {
    // Implement logout logic
    this.router.navigate(['/']);
  }

  profile() {
    // Implement logout logic
    this.router.navigate(['/user-dashboard/profile']);
  }
  goTo(route: string) {
    this.router.navigate(["/"]);
  }
}


