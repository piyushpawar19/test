import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface CartItem {
  id: number;
  title: string;
  quantity: number;
  price: number;
}

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css'],
})
export class AddToCartComponent implements OnInit {
  items: CartItem[] = [];
  constructor(private router: Router) {}

  ngOnInit() {
    // TODO: load cart from service
    this.items = [
      { id: 1, title: 'Apple', quantity: 2, price: 1 },
      { id: 2, title: 'Banana', quantity: 3, price: 0.5 },
    ];
  }

  increment(item: CartItem) {
    item.quantity++;
  }
  decrement(item: CartItem) {
    if (item.quantity > 1) item.quantity--;
    else this.remove(item);
  }
  remove(item: CartItem) {
    this.items = this.items.filter((i) => i.id !== item.id);
  }
  get totalItems() {
    return this.items.reduce((sum, i) => sum + i.quantity, 0);
  }
  get totalAmount() {
    return this.items.reduce((sum, i) => sum + i.quantity * i.price, 0);
  }

  buyNow() {
    this.router.navigate(['/buy-now']);
  }
  back() {
    this.router.navigate(['dashboard']);
  }
}
