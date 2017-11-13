import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Store} from "./store";
import {ProgressService} from "./services/progress.service";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {SpinnerInterceptor} from "./interceptors/spinner.interceptor";
import {TimingInterceptor} from "./interceptors/timing.interceptor";
import {ErrorInterceptor} from "./interceptors/error.interceptor";
import {Init1, Init2, Init3, Init4, Init5} from "./services/init-service";

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [Store, Init1, Init2, Init3, Init4, Init5, ProgressService,
    {provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: TimingInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
    ]
})
export class CoreModule { }
