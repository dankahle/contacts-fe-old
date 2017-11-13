import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {ContactsModule} from "./contacts/contacts.module";
import {CoreModule} from "./core/core.module";
import {SharedModule} from "./shared/shared.module";
import {RouterModule, Routes} from "@angular/router";
import {InitializationGuard} from "./initialization.guard";
import {PageNotFoundComponent} from './shared/components/page-not-found/page-not-found.component';
import 'hammerjs';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/contact', pathMatch: 'full', canActivate: [InitializationGuard] },
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
  providers: [InitializationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
