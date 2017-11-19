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

  constructor(contactsService:ContactsService) {}

}

