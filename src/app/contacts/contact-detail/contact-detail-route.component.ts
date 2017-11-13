import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog, MatDialogConfig} from "@angular/material";
import {ContactDetailComponent} from "./contact-detail.component";
import {ProgressService} from "../../core/services/progress.service";

@Component({
  selector: 'dk-contact-detail-route',
  template: '<router-outlet></router-outlet>',
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class ContactDetailRouteComponent {

  constructor(route: ActivatedRoute, router: Router, progressService: ProgressService, dialog: MatDialog) {

    route.data.subscribe(data => {
      progressService.hideProgressBar();
      const config = <MatDialogConfig> {
        data: {contact: data.contact},
        width: '300px'
      }
      dialog.open(ContactDetailComponent, config)
        .afterClosed()
        .subscribe(result => {
          //dankfix: update contact list with new value??
          router.navigateByUrl('/contacts');
        })
    });

  }

}
