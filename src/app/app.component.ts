import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Sample product data
  products: any[] = [
    {
      name: 'Product 1',
      price: 10.99,
      imageUrl: 'https://m.media-amazon.com/images/I/51XR1yLfcsL._SX679_.jpg'
    },
    {
      name: 'Product 2',
      price: 19.99,
      imageUrl: 'https://m.media-amazon.com/images/I/41-0wJcjjwL._SX300_SY300_QL70_ML2_.jpg'
    },
    {
      name: 'Product 3',
      price: 19.99,
      imageUrl: 'https://m.media-amazon.com/images/I/41B6vLjqU2L._SX300_SY300_QL70_ML2_.jpg'
    },
    {
      name: 'Product 4',
      price: 19.99,
      imageUrl: 'https://m.media-amazon.com/images/I/51Zv4CX1tXL._SX679_.jpg'
    },
    {
      name: 'Product 5',
      price: 19.99,
      imageUrl: 'https://m.media-amazon.com/images/I/51kDpOpbxvL._SX300_SY300_QL70_ML2_.jpg'
    },
    {
      name: 'Product 6',
      price: 19.99,
      imageUrl: 'https://m.media-amazon.com/images/I/41Y-o+aSv2L._SY300_SX300_.jpg' 
    },
    
    // Add more products here
  ];


  cart: any[] = [];

// Logic to add products to the cart
addToCart(product: any) {
  this.cart.push(product);
}

  

  removeFromCart(item: any) {
    // Implement logic to remove the selected item from the cart
    const index = this.cart.indexOf(item);
    if (index !== -1) {
      this.cart.splice(index, 1);
    }
  }

  // calculateTotal() {
  //   // Implement logic to calculate the total price of items in the cart
  //   return this.cart.reduce((total, item) => total + item.price, 0);
  // }
}