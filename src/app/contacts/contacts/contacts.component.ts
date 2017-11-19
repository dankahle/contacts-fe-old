import { Component, OnInit } from '@angular/core';
import {ContactsService} from "../contacts.service";
import {Contact} from "./contact";
import {Store} from "../../core/services/store";

@Component({
  selector: 'dk-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: []
})
export class ContactsComponent {
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

