import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({ selector: 'app-register', templateUrl: './register.component.html', styleUrls: ['./register.component.css'] })
export class RegisterComponent implements OnInit {
  regForm!: FormGroup;
  constructor(private fb: FormBuilder,private router:Router) {}
  ngOnInit() {
    this.regForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }
  onSubmit() {
    if (this.regForm.valid) console.log(this.regForm.value);
    this.router.navigate(["/login-selection"]);
  }
}



