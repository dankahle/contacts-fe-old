import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts/contacts.component';
import {ContactsService} from "./contacts.service";
import {HttpClientModule} from "@angular/common/http";
import {CoreModule} from "../core/core.module";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    CoreModule
  ],
  declarations: [ContactsComponent],
  exports: [ContactsComponent],
  providers: [ContactsService]
})
export class ContactsModule { }
