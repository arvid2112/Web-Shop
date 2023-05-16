import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';

const routes: Routes = [
  {path: 'cart-details', component: CartDetailsComponent},
  {path: 'product', component: ProductComponent},
  {path: 'product/:id', component: ProductComponent},
  {path: 'productList', component: ProductListComponent},
  {path: 'productList/:id', component: ProductListComponent},
  {path: 'cart', component: CartComponent},
  {path: '', redirectTo: '/productList', pathMatch: 'full'},
  {path: '**', redirectTo: '/productList', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
