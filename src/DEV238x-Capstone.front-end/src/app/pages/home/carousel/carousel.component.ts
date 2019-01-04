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

  // When the slideshow is enabled/disabled we will start/stop the timer/
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.slideShowEnabled !== undefined) {
      if (changes.slideShowEnabled.currentValue) {
        this.startTimer();
      } else {
        this.stopTimer();
      }
    }
  }

  // Go to the next slide
  // I would like to avoid jquery at all cost, but I just can't seem to be able to pause and play the carousel without it.
  // Couldn't pause and resume the carousel ($('#my-carousel').carousel('pause')), so I do it in this way.
  autoplay(): void {
    if (this.slideShowEnabled) {
      const currentslide = $('#my-carousel').find('.active').index();
      const totalSlides = $('#my-carousel').find('.carousel-inner').children().length;
      $('#my-carousel').carousel((currentslide + 1) % totalSlides);
    }
  }

  // rubric10
  startTimer(): void {
    if (this.autoplayInterval !== undefined) {
      this.stopTimer();
    }
    this.autoplayInterval = setInterval(() => this.autoplay(), 3000);
  }

  stopTimer(): void {
    clearInterval(this.autoplayInterval);
  }

  resetTimer(): void {
    if (this.slideShowEnabled) {
      this.stopTimer();
      this.startTimer();
    }
  }

  // rubric09
  navigateToPage(url: string): void {
    this.router.navigateByUrl(url);
  }
}
