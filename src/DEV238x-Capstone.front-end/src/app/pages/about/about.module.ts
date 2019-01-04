import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { PersonComponent } from './person/person.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AboutComponent, PersonComponent]
})
export class AboutModule { }
