import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts/contacts.component';
import {ContactsService} from "./contacts.service";
import {HttpClientModule} from "@angular/common/http";
import {CoreModule} from "../core/core.module";
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {InitializationGuard} from "../initialization.guard";
import {SharedModule} from "../shared/shared.module";
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import {ContactListResolve} from "./contact-list/contact-list.resolve";
import {ContactDetailResolve} from "./contact-detail/contact-detail.resolve";
import {ContactDetailRouteComponent} from "./contact-detail/contact-detail-route.component";

export const contactRoutes: Routes = [
  {
    path: '',
    component: ContactListComponent,
    canActivate: [InitializationGuard],
    children: [
      {
        path: ':id',
        component: ContactDetailRouteComponent,
        resolve: {
          contact: ContactDetailResolve
        }
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(contactRoutes),
    SharedModule,
    CoreModule
  ],
  declarations: [ContactsComponent, ContactListComponent, ContactDetailRouteComponent, ContactDetailComponent],
  entryComponents: [ContactDetailComponent],
  exports: [ContactsComponent, RouterModule],
  providers: [ContactsService, ContactListResolve, ContactDetailResolve]
})
export class ContactsModule { }
