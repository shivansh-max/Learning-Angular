import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

export class Logging implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler){
    console.log("OutGoing Req")
    return next.handle(req);
  }

}
