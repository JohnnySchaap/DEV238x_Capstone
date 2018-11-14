import { Component, OnInit } from '@angular/core';
import { CarouselItem } from 'src/app/shared/models/carousel-item';
import { Input } from '@angular/core';
import { OnChanges } from '@angular/core';
import { SimpleChanges } from '@angular/core';
import * as $ from 'jquery';
import 'bootstrap';
import { Router } from '@angular/router';
import { debug } from 'util';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnChanges {


  @Input() carouselItems: CarouselItem[];
  @Input() slideShowEnabled: boolean;
  autoplayInterval: any;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.slideShowEnabled !== undefined) {
      if (changes.slideShowEnabled.currentValue) {
        this.startTimer();
      } else {
        this.stopTimer();
      }
    }
  }

  // Also, I would like to avoid jquery at all cost, but I just can't seem to be able to pause and play the carousel without it.
  // Could pause and resume the carousel ($('#my-carousel').carousel('pause')), so I do it in this way.
  autoplay(): any {
    if (this.slideShowEnabled) {
      const currentslide = $('#my-carousel').find('.active').index();
      const totalSlides = $('#my-carousel').find('.carousel-inner').children().length;
      $('#my-carousel').carousel((currentslide + 1) % totalSlides);
    }
  }

  startTimer() {
    if (this.autoplayInterval !== undefined) {
      this.stopTimer();
    }
    this.autoplayInterval = setInterval(() => this.autoplay(), 3000);
  }

  stopTimer() {
    clearInterval(this.autoplayInterval);
  }

  resetTimer() {
    if (this.slideShowEnabled) {
      this.stopTimer();
      this.startTimer();
    }
  }

  navigateToPage(url: string) {
    this.router.navigateByUrl(url);
  }
}
