import { Component } from '@angular/core';
import {UserService} from "./core/services/user-service";
import {User} from "./core/models/user";
import {Store} from "./core/services/store";

@Component({
  selector: 'dk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user: User;
  constructor(store: Store, private userService: UserService) {
    store.subscribe(state => this.user = state.user);
  }

  logout() {
    this.userService.logout();
  }

}
