import { Component, OnInit } from '@angular/core';

interface Product { name: string; price: number; image: string; }

@Component({ selector: 'app-home', templateUrl: './home.component.html', styleUrls: ['./home.component.css'] })
export class HomeComponent  {
  // products: Product[] = [];
  // ngOnInit() {
  //   this.products = [
  //     { name: 'Apple', price: 1.2, image: 'assets/apple.jpg' },
  //     // add 8 more dummy items
  //   ];
  // }
}