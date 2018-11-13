import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShoppingComponent } from 'src/app/pages/shopping/shopping.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [ShoppingComponent],
  exports: [ShoppingComponent]
})
export class ShoppingModule { }
