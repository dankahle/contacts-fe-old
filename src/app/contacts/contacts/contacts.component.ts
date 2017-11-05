import { Component, OnInit } from '@angular/core';
import {ContactsService} from "../contacts.service";
import {Contact} from "./contact";

@Component({
  selector: 'dk-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  contacts:Contact[];

  constructor(contactsService:ContactsService) {
    contactsService.getAll()
      .subscribe(contacts => this.contacts = contacts);
  }

}
