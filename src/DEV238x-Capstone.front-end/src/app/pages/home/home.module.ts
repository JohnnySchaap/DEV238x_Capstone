import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeComponent, CarouselComponent],
  exports: [HomeComponent],
})
export class HomeModule { }
