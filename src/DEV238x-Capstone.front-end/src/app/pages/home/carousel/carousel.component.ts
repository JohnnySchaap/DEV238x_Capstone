import { Component, OnInit } from '@angular/core';
import { CarouselItem } from 'src/app/shared/models/carousel-item';
import { Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() carouselItems: CarouselItem[];

  constructor() { }

  ngOnInit() {
  }

  navigateToPage(url: string) {

  }
}
