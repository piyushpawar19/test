import { Component } from '@angular/core';
import { Router }    from '@angular/router';

@Component({
  selector: 'app-insert-product',
  templateUrl: './insert-product.component.html',
  styleUrls: ['./insert-product.component.css']
})
export class InsertProductComponent {
  product = {
    name:        '',
    description: '',
    quantity:    0,
    imageUrl:    '',
    price:       0
  };

  constructor(private router: Router) {}

  addProduct() {
    console.log('Product added:', this.product);
    // later: call your service…
    this.router.navigate(['/view-product']);
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
