import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpErrorResponse,
    HttpSentEvent,
    HttpHeaderResponse,
    HttpProgressEvent,
    HttpResponse,
    HttpUserEvent,
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';
import { AvHttpClient } from './http/http.client';

@Injectable()
export class DefaultInterceptor implements HttpInterceptor {

    constructor(private injector: Injector) { }

    private goTo(url: string) {
        setTimeout(() => this.injector.get(Router).navigateByUrl(url));
    }

    private handleData(
        event: HttpResponse<any> | HttpErrorResponse,
    ): Observable<any> {
        this.injector.get(AvHttpClient).end();
        switch (event.status) {
            case 200:
                break;
            case 401:
                // this.goTo('/login');
                break;
            case 403:
            case 404:
            case 500:
                // TODO
                break;
            default:
                console.log(event);
                break;
        }
        return of(event);
    }

    intercept(req: HttpRequest<any>,
        next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent
        | HttpResponse<any> | HttpUserEvent<any>> {

        const token = '';
        const newReq = req.clone({
            headers: req.headers.set('Authorization', token)
        });

        return next.handle(newReq).pipe(
            mergeMap((event: any) => {
                if (event instanceof HttpResponse) {
                    return this.handleData(event);
                }
                return of(event);
            }),
            catchError((err: HttpErrorResponse) => this.handleData(err))
        );
    }

}
