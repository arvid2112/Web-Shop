import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor(private Http : HttpClient) { }
  
  getProductList(){
   return this.Http.get('https://fakestoreapi.com/products')
    
    // this.router.navigate([navigate])
    
   };
}
