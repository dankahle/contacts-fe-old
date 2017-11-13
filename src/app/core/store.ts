
import {Injectable} from "@angular/core";
import {INITIAL_STATE, InitialState} from "./initial-state";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Observable";

@Injectable()
/**
 * Store
 * @desc - inspired by redux, a global state components can subscribe to for changes and update. Instead of actions, reducers,
 * and epics (yuck), just a global service all share with update functions and publish() to notify of changes:
 * in component:
 * constructor(store Store) { store.subscribe(state => this.someval = state.someval); }
 * to update, add an update function to Store and call it, then call publish() to publish to subscribers
 */
export class Store {
  state:InitialState = INITIAL_STATE;
  state$ = new BehaviorSubject(this.state);
  subscribe = this.state$.subscribe.bind(this.state$);

  updateMessageCount(val:number) {
    this.state.messageCount = val;
    this.publish();
  }

  publish() {
    this.state$.next(this.state);
  }

}
