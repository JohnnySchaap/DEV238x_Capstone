import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    CommonModule
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
