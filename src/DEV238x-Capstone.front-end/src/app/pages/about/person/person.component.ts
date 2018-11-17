import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/shared/models/person';
import { Input } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  @Input() person: Person;

  constructor() {

  }

  ngOnInit() {
  }

}
