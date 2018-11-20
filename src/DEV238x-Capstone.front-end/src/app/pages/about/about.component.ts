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

    // Generate employees
    // Normally this would be retrieved from a server.
    // So we would have created a service and put logic in there.
    // Logic should stay out of controller and be put in service IMO.
    for (let i = 0; i < 4; i++) {
      this.persons[i] = new Person();
      this.persons[i].name = 'Name ' + i;
      this.persons[i].subTitle = 'Subtitle ' + i;
      this.persons[i].description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut';
      this.persons[i].imageLink = '../../../../assets/images/person.png';
    }

  }

  ngOnInit() {
  }

}
