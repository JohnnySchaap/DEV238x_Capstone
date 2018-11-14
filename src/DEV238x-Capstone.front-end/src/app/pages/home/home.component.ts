import { Component, OnInit } from '@angular/core';
import { CarouselItem } from 'src/app/shared/models/carousel-item';
import { AssortmentService } from 'src/app/shared/services/assortment-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public carouselItems: CarouselItem[];
  public slideShowEnabled = false;

  constructor(private assortmentService: AssortmentService) {
    assortmentService.getAssortment().subscribe((assortment) => {
      this.carouselItems = [];

      // We grab the first item in the first subcategory in each assortment
      for (let i = 0; i < assortment.length; i++) {
        if (assortment[i].subcategories.length > 0 && assortment[i].subcategories[0].items.length > 0) {

          const carouselItem = assortment[i].subcategories[0].items[0];
          this.carouselItems[i] = new CarouselItem();
          this.carouselItems[i].imgSrc = carouselItem.imagelink;
          this.carouselItems[i].title = carouselItem.name;
          this.carouselItems[i].url = 'product?productname=' + carouselItem.name;
        }
      }
    });
  }

  ngOnInit() {
  }

  changeShowSlideShow() {
    this.slideShowEnabled = !this.slideShowEnabled;
  }
}
