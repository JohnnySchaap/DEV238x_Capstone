import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/shared/models/person';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  persons: Person[];

  constructor() {

    this.persons = [];
    for (let i = 0; i < 4; i++) {
      this.persons[i] = new Person();
      this.persons[i].Name = "Name " + i;
      this.persons[i].SubTitle = "Subtitle " + i;
      this.persons[i].Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut";
      this.persons[i].ImageLink = "../../../../assets/images/person.png";
    }

  }

  ngOnInit() {
  }

}
