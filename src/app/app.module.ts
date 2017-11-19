import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {ContactsModule} from "./contacts/contacts.module";
import {CoreModule} from "./core/core.module";
import {SharedModule} from "./shared/shared.module";
import {RouterModule, Routes} from "@angular/router";
import {PageNotFoundComponent} from './shared/components/page-not-found/page-not-found.component';
import 'hammerjs';
import {Store} from "./core/services/store";
import {LoginComponent} from "./shared/components/login/login.component";

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: LoginComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
    ContactsModule,
    CoreModule,
    SharedModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  // initialize the Store
  constructor(store: Store) {
  }
}
