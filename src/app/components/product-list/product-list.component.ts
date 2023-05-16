
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductListService } from 'src/app/services/product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy{
p:any;
list: any;
subscription: Subscription;
filteredProducts: any;

constructor(private service : ProductListService){
  this.subscription= service.getProductList()
  .subscribe(result => this.filteredProducts = this.list=result ); 
  }
  
  filter(query: string) {
  this.filteredProducts = (query) ?
  this.list.filter(p=> p.title.toLowerCase().includes(query.toLowerCase())) :
  this.list;
  
  }

 ngOnInit(): void {
  
 };

 ngOnDestroy(): void {
   this.subscription.unsubscribe();
 }
  

 }  

  
  




