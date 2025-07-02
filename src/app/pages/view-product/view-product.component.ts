
import { Component, OnInit } from '@angular/core';
import { Router }             from '@angular/router';
import productsData          from './products.json';

interface Product {
  id: number;
  name: string;
  description: string;
  quantity: number;
  imageUrl: string;
  price: number;
}

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  allProducts: Product[] = [];
  page = 1;
  perPage = 10;

  constructor(private router: Router) {}

  ngOnInit() {
    // Load from JSON file instead of localStorage
    this.allProducts = productsData;
  }

  // ngOnInit() {
  //   const stored = localStorage.getItem('products');
  //   this.allProducts = stored ? JSON.parse(stored) : productsData;
    
  //   // If products aren't in localStorage yet, store initial products
  //   if (!stored) {
  //     localStorage.setItem('products', JSON.stringify(this.allProducts));
  //   }
  // }

  get displayed() {
    const start = (this.page - 1) * this.perPage;
    return this.allProducts.slice(start, start + this.perPage);
  }

  delete(id: number) {
    // Remove in-memory only
    this.allProducts = this.allProducts.filter(p => p.id !== id);
  }

  update(id: number) {
    console.log(id);
    this.router.navigate(['/admin/update-product',id]);

  }

  prev() {
    if (this.page > 1) this.page--;
  }

  next() {
    if (this.page * this.perPage < this.allProducts.length) this.page++;
  }
}