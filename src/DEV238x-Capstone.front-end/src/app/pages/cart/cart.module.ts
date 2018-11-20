import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { FormsModule } from '@angular/forms';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { CartItemComponent } from './cart-items/cart-item/cart-item.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule
  ],
  declarations: [CartComponent, CartItemsComponent, CartItemComponent]
})
export class CartModule { }
