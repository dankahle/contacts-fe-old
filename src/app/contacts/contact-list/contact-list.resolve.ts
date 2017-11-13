import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, Resolve} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {ContactsService} from "../contacts.service";
import {IContact} from "../contacts.model";

@Injectable()
export class ContactListResolve implements Resolve<IContact[]> {

  constructor(private contactsService: ContactsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IContact[]> {
    // console.log('contact resolve start');
    return this.contactsService.getAll();
  }

}
