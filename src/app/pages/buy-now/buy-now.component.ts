
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({  
  selector: 'app-buy-now',  
  templateUrl: './buy-now.component.html',  
  styleUrls: ['./buy-now.component.css']  
})
export class BuyNowComponent {
  form: FormGroup;
  totalItems = 0;
  totalAmount = 0;

  constructor(private fb: FormBuilder, private router: Router) {
    // TODO: populate these values from cart service
    this.totalItems = 5;
    this.totalAmount = 21.99;

    this.form = this.fb.group({  
      cardName: ['', [Validators.required, Validators.pattern(/^[A-Za-z ]+$/)]],
      cardNumber: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
      cvv: ['', [Validators.required, Validators.pattern(/^\d{3}$/)]],
      expiry: ['', [Validators.required, this.expiryValidator]]
    });
  }

  expiryValidator(control: any) {
    if (!/^\d{2}\/\d{2}$/.test(control.value)) return { invalidFormat: true };
    const [mm, yy] = control.value.split('/').map((v: string) => parseInt(v, 10));
    const expiry = new Date(2000 + yy, mm - 1);
    return expiry < new Date() ? { expired: true } : null;
  }

  placeOrder() {
    if (this.form.invalid) return;
    // TODO: call order service
    const orderId = Math.floor(Math.random()*100000);
    this.router.navigate(['/invoice', orderId]);
  }

  back() { this.router.navigate(['invoice']); }
}
