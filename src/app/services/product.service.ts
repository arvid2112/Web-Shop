import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Product } from '../common/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

private baseUrl = 'https://fakestoreapi.com/products/';

    constructor(private http : HttpClient) {
   }

  //  getAll(url:string){
  //   return this.http.get(url);
    
  //  }

   getProduct(theProductId: number): Observable<Product> {

    // need to build URL based on product id
    const productUrl = `${this.baseUrl}/${theProductId}`;

    return this.http.get<Product>(productUrl);
  }

  getProductList(theCategoryId: number): Observable<Product[]> {

    // need to build URL based on category id 
    const searchUrl = `${this.baseUrl}/${theCategoryId}`;

    return this.getProducts(searchUrl);
  }


  private getProducts(searchUrl: string): Observable<Product[]> {
    return this.http.get<GetResponseProducts>(searchUrl).pipe(map(response => response._embedded.products));
  }

  searchProductsPaginate(thePage: number, 
    thePageSize: number, 
    theKeyword: string): Observable<GetResponseProducts> {

// need to build URL based on keyword, page and size 
const searchUrl = `${this.baseUrl}/${theKeyword}`
+ `&page=${thePage}&size=${thePageSize}`;

return this.http.get<GetResponseProducts>(searchUrl);
}

searchProducts(theKeyword: string): Observable<Product[]> {

  // need to build URL based on the keyword 
  const searchUrl = `${this.baseUrl}/${theKeyword}`;

  return this.getProducts(searchUrl);
}

getProductListPaginate(thePage: number, 
  thePageSize: number, 
  theCategoryId: number): Observable<GetResponseProducts> {

// need to build URL based on category id, page and size 
const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`
+ `&page=${thePage}&size=${thePageSize}`;

return this.http.get<GetResponseProducts>(searchUrl);
}

}



interface GetResponseProducts {
  _embedded: {
    products: Product[];
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }
}