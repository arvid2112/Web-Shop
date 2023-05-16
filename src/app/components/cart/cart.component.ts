import { Component, OnDestroy, OnInit } from '@angular/core';

import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  // cartItems: any[] = [];
  // quantity: number = 0;
  // totalPrice = 0;

  totalPrice: number = 0.00;
  totalQuantity: number = 0;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.updateCartStatus();
    // const cartData = window.localStorage.getItem('cartItems');
    // if (cartData) {
    //   this.cartItems = JSON.parse(cartData);

    //   console.log(this.cartItems);
    }
  
    updateCartStatus() {

      // subscribe to the cart totalPrice
      this.cartService.totalPrice.subscribe(
        data => this.totalPrice = data
      );
  
      // subscribe to the cart totalQuantity
      this.cartService.totalQuantity.subscribe(
        data => this.totalQuantity = data
      );
    }
  


  // getCartItems() {
  //   const cartItems = localStorage.getItem('cartItems');
  //   if (cartItems) {
  //     return JSON.parse(cartItems);
  //   } else {
  //     return [];
  //   }
  // }

  // setCartItems(cartItems: any) {
  //   localStorage.setItem('cartItems', JSON.stringify(cartItems));
  // }

  // updateQuantity(itemId: number, newQuantity: number): void {
  //   const cartItems = this.getCartItems();
  //   const itemIndex = cartItems.findIndex((item) => item.id === itemId);
  //   if (itemIndex !== -1) {
  //     cartItems[itemIndex].quantity = newQuantity;

  //     this.setCartItems(cartItems);
  //     console.log('after setting cart' + this.quantity);
  //   }
  // }

  // calculateTotalAmount(itemId) {
  //   const cartItems = this.getCartItems();
  //   // const itemIndex = cartItems.findIndex((item) => item.id === itemId);
  //   console.log("calculate total:" + cartItems.id);
    
  //   if(cartItems.id===itemId){
  //     console.log("calculate itemid:"+ itemId);
      
  //   this.totalPrice += cartItems.quantity * cartItems.price;
  //   }

  //   // this.totalPrice = 0;
  //   // for (const item of cartItems) {
  //   //   this.totalPrice += item.quantity * item.price;
  //   // }
  //   // return this.totalPrice=totalAmount;
  // }

  // incrementQuantity(index: number,itemId: number, newQuantity: number ) {
  //   this.cartItems[index].quantity++;
  //   this.updateQuantity(itemId, newQuantity);
  //   this.calculateTotalAmount(itemId);
  // }


  
  // decrementQuantity(index: number, itemId: number, newQuantity: number) {
  //   if (this.cartItems[index].quantity > 1) {
  //     this.cartItems[index].quantity--;
  //     this.updateQuantity(itemId, newQuantity);
  //     this.calculateTotalAmount(itemId);
      
      
  //   }
  // }

  

  // ngOnDestroy(): void {}

  // resetLocalStorage() {
  //   localStorage.clear();
  // }
}
