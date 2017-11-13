import { Component } from '@angular/core';
import {Store} from "./core/store";

@Component({
  selector: 'dk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(store: Store) {
  }

}
