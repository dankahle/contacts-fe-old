import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Contact} from "../contacts/contact";
import {ContactsService} from "../contacts.service";
import {Store} from "../../core/store";

@Component({
  selector: 'dk-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactListComponent {
  contacts:Contact[];
  messageCount: number;

  constructor(contactsService:ContactsService, protected store: Store) {
    store.subscribe(state => {
      this.messageCount = state.messageCount;
    });

    contactsService.getAll()
      .subscribe(contacts => this.contacts = contacts);
  }
}
