import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from 'src/app/pages/home/home.module';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { ShoppingModule } from 'src/app/pages/shopping/shopping.module';

@NgModule({
  imports: [
    CommonModule,
    HomeModule,
    ShoppingModule
  ],
  exports: []
})
export class PagesModule { }
