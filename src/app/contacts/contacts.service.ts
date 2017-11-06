import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from "@angular/common/http";
import {Contact} from "./contacts/contact";

@Injectable()
export class ContactsService {
  apiUrl = environment.apiUrl;

constructor(private http:HttpClient) {}

  getAll() {
    console.log(this.apiUrl + '/api/contacts');
    return this.http.get<Contact[]>(this.apiUrl + '/api/contacts')
  }

}
