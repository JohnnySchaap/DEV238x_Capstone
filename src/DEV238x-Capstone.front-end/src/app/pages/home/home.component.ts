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
  public slideShowEnabled: boolean = false;

  constructor(private assortmentService: AssortmentService) {
    assortmentService.getAssortment().subscribe((assortment) => {
      this.carouselItems = [];

      // We grab the first item in the first subcategory in each assortment
      for (let i = 0; i < assortment.length; i++) {
        if (assortment[i].subcategories.length > 0 && assortment[i].subcategories[0].items.length > 0) {
          this.carouselItems[i] = new CarouselItem();
          this.carouselItems[i].imgSrc = assortment[i].subcategories[0].items[0].imagelink;
          this.carouselItems[i].title = assortment[i].subcategories[0].items[0].name;
          this.carouselItems[i].url = "product/" + assortment[i].subcategories[0].items[0].category + "/" + assortment[i].subcategories[0].items[0].subcategory + "/" + assortment[i].subcategories[0].items[0].name;
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
