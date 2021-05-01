import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('Reauest is on its way');
    const modifiedReq = req.clone({
      headers: req.headers.append(
        'Auth',
        'asdfasdfasdfasdfa'
      )
    });
    return next.handle(modifiedReq).pipe(tap((event) => {
      console.log(event);
    }));
  }
}
