import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { ShoppingComponent } from 'src/app/pages/shopping/shopping.component';
import { ProductComponent } from 'src/app/pages/product/product.component';
import { ContactComponent } from 'src/app/pages/contact/contact.component';
import { AboutComponent } from 'src/app/pages/about/about.component';
import { CartComponent } from 'src/app/pages/cart/cart.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: []
  },
  {
    path: 'shopping',
    component: ShoppingComponent,
    children: []
  },
  {
    path: 'product',
    component: ProductComponent,
    children: []
  },
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
  {
    path: 'contact',
    component: ContactComponent,
    children: []
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
