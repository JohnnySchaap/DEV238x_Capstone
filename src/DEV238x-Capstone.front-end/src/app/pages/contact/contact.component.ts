import { Component, OnInit } from '@angular/core';
import { ContactDetails } from 'src/app/shared/models/contact-details';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactDetails: ContactDetails;
  subjects: string[];

  constructor() {
    this.contactDetails = new ContactDetails();
    this.subjects = ['Subject 1', 'Subject 2', 'Subject 3', 'Subject 4'];
  }

  ngOnInit() {
  }

  send() {
    alert('Your message is send.' +
      ' Name: ' + this.contactDetails.Name +
      ', Email: ' + this.contactDetails.Email +
      ', Subject: ' + this.contactDetails.Subject +
      ', Message: ' + this.contactDetails.Message.substr(0, 10) + '...');
  }
}
