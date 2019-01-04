import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { ShoppingComponent } from 'src/app/pages/shopping/shopping.component';
import { ProductComponent } from 'src/app/pages/product/product.component';
import { ContactComponent } from 'src/app/pages/contact/contact.component';
import { AboutComponent } from 'src/app/pages/about/about.component';
import { CartComponent } from 'src/app/pages/cart/cart.component';

const routes: Routes = [
  // rubric13(1)
  {
    path: 'home',
    component: HomeComponent,
    children: []
  },
  // rubric34
  {
    path: 'shopping',
    component: ShoppingComponent,
    children: []
  },
  // rubric46(1)
  {
    path: 'product',
    component: ProductComponent,
    children: []
  },
  // rubric56
  {
    path: 'cart',
    component: CartComponent,
    children: []
  },
  {
    path: 'about',
    component: AboutComponent,
    children: []
  },
  // rubric62
  {
    path: 'contact',
    component: ContactComponent,
    children: []
  },
  // rubric13 (2)
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
