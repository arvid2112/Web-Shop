import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/common/product';
import { CartItem } from 'src/app/common/cart-item';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  product: Product = new Product();

  // id: any;
  // url: string = 'https://fakestoreapi.com/products/';
  // list: any;
  // showActions = true;
  constructor(
    private route: Router,
    private productService: ProductService,
    private router: ActivatedRoute,
    private cartService: CartService
  ) {
    // this.id = this.router.snapshot.paramMap.get('id');

    // this.url = this.url + this.id;
    // console.log('Final URL', this.url);
    // console.log('ID:', this.id);
  }
  ngOnInit(): void {
    //  this.productService.getAll(this.url).subscribe((data)=>{

    //   this.list=data;
    this.router.paramMap.subscribe(() => {
      this.handleProductDetails();
    });
  }

  //  addToCart(): void {
  //   console.log(`Adding to cart: ${this.list.title}, ${this.list.price}`);
  //   this.cartService.addToCart(this.list);
  //   this.route.navigateByUrl('/productList');

  // }

  handleProductDetails() {
    // get the "id" param string. convert string to a number using the "+" symbol
    const theProductId: number = +this.router.snapshot.paramMap.get('id');

    this.productService.getProduct(theProductId).subscribe((data) => {
      this.product = data;
    });
  }

  addToCart() {
    console.log(`Adding to cart: ${this.product.title}, ${this.product.price}`);
    const theCartItem = new CartItem(this.product);
    this.cartService.addToCart(theCartItem);
  }
}
