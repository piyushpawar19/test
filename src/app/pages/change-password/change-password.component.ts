import { Component } from '@angular/core';
import { Router }    from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  oldPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';

  errorMessage: string = '';
  successMessage: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    this.errorMessage = '';
    this.successMessage = '';

    if (!this.oldPassword || !this.newPassword || !this.confirmPassword) {
      this.errorMessage = 'All fields are required.';
      return;
    }

    if (this.newPassword !== this.confirmPassword) {
      this.errorMessage = 'New Password and Confirm Password do not match.';
      return;
    }

    // TEMP: simulate password change
    console.log('Password changed:', {
      oldPassword: this.oldPassword,
      newPassword: this.newPassword
    });

    this.successMessage = 'Password updated successfully!';
    // Optionally: redirect after a delay
    setTimeout(() => this.router.navigate(['/admin']), 1500);
  }
}
