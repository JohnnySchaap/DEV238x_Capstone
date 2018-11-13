import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from 'src/app/pages/home/home.module';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { ShoppingModule } from 'src/app/pages/shopping/shopping.module';
import { ProductModule } from 'src/app/pages/product/product.module';
import { CartModule } from 'src/app/pages/cart/cart.module';
import { AboutModule } from 'src/app/pages/about/about.module';
import { ContactModule } from 'src/app/pages/contact/contact.module';

@NgModule({
  imports: [
    CommonModule,
    HomeModule,
    ShoppingModule,
    ProductModule,
    CartModule,
    AboutModule,
    ContactModule
  ],
  exports: []
})
export class PagesModule { }
