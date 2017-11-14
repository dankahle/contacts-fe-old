
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {
  HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,
  HttpResponse
} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {ProgressService} from "../services/progress.service";
import {MatDialog, MatDialogConfig} from "@angular/material";
import {ErrorModalComponent} from "../../shared/components/error-modal/error-modal.component";
import {Router} from "@angular/router";


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private progressService: ProgressService, public dialog: MatDialog, private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next
      .handle(req)
      .do(event => {
      })
      .catch(err => {
        this.progressService.hideProgressBar();
        const config = <MatDialogConfig> {
          data: {error: err.error},
          width: '300px'
        }
        this.dialog.open(ErrorModalComponent, config)
          .afterClosed()
          .subscribe(result => {
            // If we have a bad id, it leaves us in the detail route after error and can't
            // look at any other contacts. Have to navigate to '/' in that case, but only after error modal goes down
            if (err.error.message.toLowerCase() === 'invalid id parameter') {
              this.router.navigateByUrl('/');
            }
          })
        return Observable.of(err);
      })
  }

}



/*


class HttpResponseBase {
  headers: HttpHeaders
  status: number
  statusText: string
  url: string|null
  ok: boolean
  type: HttpEventType.Response|HttpEventType.ResponseHeader
}

class HttpResponse<T> extends HttpResponseBase {
  body: T|null
  type: Response
  clone(update: {...}): HttpResponse<any>
}

class HttpErrorResponse extends HttpResponseBase implements Error {
  name: 'HttpErrorResponse'
  message: string
  error: any|null
  ok: false
}
 */
