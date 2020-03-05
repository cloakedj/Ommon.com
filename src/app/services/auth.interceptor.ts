import { Injectable } from "@angular/core";
import { tap } from "rxjs/operators";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable } from "rxjs";
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
  constructor(
    private toastr : ToastrService){}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authenticatedRequest =  request.clone({
         withCredentials : true
      });
      console.log("before making request",authenticatedRequest);
    return next.handle(authenticatedRequest).pipe(
      tap(
        event => {
          if (event instanceof HttpResponse) {
            console.log(event.body);
            console.log("api call success :", event);
          }
        },
        error => {
             console.log(error);
        },
      )
    );
 
 }

}