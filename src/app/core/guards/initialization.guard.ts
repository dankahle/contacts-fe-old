import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import {Init1, Init2, Init3, Init4, Init5} from "../services/init-service";
import {merge} from "rxjs/observable/merge";
import {Globals} from "../services/globals";

@Injectable()
/**
 * InitializationGuard
 * desc - provide a complex hierarchy of initialization "before" app starts up including dependecies of dependencies
 */
export class InitializationGuard implements CanActivate {

  constructor(
    private globals: Globals,
    private init1: Init1,
    private init2: Init2,
    private init3: Init3,
    private init4: Init4,
    private init5: Init5,
    ) {
  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.init();
  }

  canActivateChild(next: ActivatedRouteSnapshot,
                   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.init();
  }

    init() {
      if (this.globals.initialized) {
        return true;
      }
      // console.log('init guard start');
      // an example of a complex initialization flow with dependencies of dependencies
      return Observable.forkJoin(this.init1.get(), this.init2.get())
        .mergeMap(x => {
          return Observable.forkJoin(this.init3.get(), this.init4.get());
        })
        .mergeMap(x => {
          return Observable.forkJoin(this.init5.get());
        })
        .map(x => {
          // console.log('init guard end');
          this.globals.initialized = true;
          return true;
        });
    }

}
