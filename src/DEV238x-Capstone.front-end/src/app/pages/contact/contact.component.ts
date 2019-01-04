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

  // rubric60
  send(): void {
    let messageCutoff = '';
    if (this.contactDetails.message.length > 10) {
      messageCutoff = '...';
    }

    alert('Your message is send.' +
      ' Name: ' + this.contactDetails.name +
      ', Email: ' + this.contactDetails.email +
      ', Subject: ' + this.contactDetails.subject +
      ', Message: ' + this.contactDetails.message.substr(0, 10) + messageCutoff);
  }
}
