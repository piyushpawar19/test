import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Product {  id: number;  title: string;  image: string;  price: number;}

@Component({  
  selector: 'app-user-dashboard',  
  templateUrl: './user-dashboard.component.html',  
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  products: Product[] = [];
  constructor(private router: Router) {}

  ngOnInit() {
    // TODO: replace with real service call
    this.products = [
      {id: 1, title: 'Apple', image: 'assets/apple.jpg', price: 1},
      {id: 2, title: 'Banana', image: 'assets/banana.jpg', price: 0.5},
      // ...
    ];
  }

  viewProduct(id: number) {
    this.router.navigate(['/product', id]);
  }
  
  // function increaseValue(): void {
  //   try {
  //     const numberInput = document.getElementById('number') as HTMLInputElement;
  //     let value: number = parseInt(numberInput.value, 10);
  //     if (isNaN(value)) {
  //       value = 0;
  //     }
  //     value++;
  //     numberInput.value = value.toString();
  //   } catch (error) {
  //     console.error("Error increasing value:", error);
  //     //Consider adding more user-friendly error handling here, e.g., displaying an alert.
  //   }
  // }

// }



// function decreaseValue(): void {
//   try {
//     const numberInput = document.getElementById('number') as HTMLInputElement;
//     let value: number = parseInt(numberInput.value, 10);
//     if (isNaN(value)) {
//       value = 0;
//     } else if (value < 1) {
//       value = 1;
//     } else {
//       value--;
//     }
//     numberInput.value = value.toString();
//   } catch (error) {
//     console.error("Error decreasing value:", error);
//     //Consider adding more user-friendly error handling here.
//   }
// }
}