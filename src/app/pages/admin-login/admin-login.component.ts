import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({ selector: 'app-admin-login', templateUrl: './admin-login.component.html', styleUrls: ['./admin-login.component.css'] })
export class AdminLoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private fb: FormBuilder, private router:Router) {}
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  onLogin() {
    if (this.loginForm.valid) console.log('Admin credentials', this.loginForm.value);
    this.router.navigate(['/admin-dashboard']);
  }
}
