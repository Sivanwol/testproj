import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Add your global headers here
    const modifiedRequest = request.clone({
      setHeaders: {
        'authkey': 'fZLcQxjr5u', // Replace with your actual header
      },
    });

    return next.handle(modifiedRequest);
  }
}
