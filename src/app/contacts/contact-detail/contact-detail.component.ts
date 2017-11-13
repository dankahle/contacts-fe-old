import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {IContact} from "../contacts.model";

@Component({
  selector: 'dk-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactDetailComponent {
  contact: IContact;

  constructor(public dialogRef: MatDialogRef<ContactDetailComponent>, @Inject(MAT_DIALOG_DATA) data: any) {
    this.contact = data.contact;
  }

}
