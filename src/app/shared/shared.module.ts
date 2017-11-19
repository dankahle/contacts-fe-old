import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, NG_VALIDATORS} from "@angular/forms";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {ForbiddenNameValidator} from "./validators/forbidden-name.validator";
import {MinValidator} from "./validators/min.validator";
import {MaxValidator} from "./validators/max.validator";
import {MaterialIndexModule} from "./material-index/material-index.module";
import {ProgressComponent} from "./components/progress/progress.component";
import {ErrorModalComponent} from "./components/error-modal/error-modal.component";
import { LoginComponent } from '../login/login/login.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    MaterialIndexModule,
    RouterModule,
    FormsModule
  ],
  declarations: [PageNotFoundComponent, ForbiddenNameValidator, MinValidator, MaxValidator, ProgressComponent, ErrorModalComponent],
  exports: [
    MaterialIndexModule,
    PageNotFoundComponent, ForbiddenNameValidator, MinValidator, MaxValidator, ProgressComponent, ErrorModalComponent],
  entryComponents: [ErrorModalComponent],
  providers: []
})
export class SharedModule { }
