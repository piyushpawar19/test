import { Component, OnInit } from '@angular/core';
import customersData          from './customer.json';

interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
}

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {
  allCustomers: Customer[] = [];
  page = 1;
  perPage = 10;

  ngOnInit() {
    // Load static JSON data
    this.allCustomers = customersData;
  }

  get displayed() {
    const start = (this.page - 1) * this.perPage;
    return this.allCustomers.slice(start, start + this.perPage);
  }

  delete(id: number) {
    this.allCustomers = this.allCustomers.filter(c => c.id !== id);
  }

  prev() {
    if (this.page > 1) this.page--;
  }

  next() {
    if (this.page * this.perPage < this.allCustomers.length) this.page++;
  }
}
