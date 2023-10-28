import { Component } from '@angular/core';
// import { MOCK_PRODUCTS } from '../mock-products';

@Component({
  selector: 'app-product-list', 
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  //tsUrls: ['./cart.component.ts']

})
export class ProductListComponent {
  // products = MOCK_PRODUCTS;
  cart: any[] = [];

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

}

// selector: 'app-cart',
//   templateUrl: './cart.component.html',
//   styleUrls: ['./cart.component.css'] 