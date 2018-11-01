import { Injectable } from '@angular/core';
import {
    HttpClient,
    HttpHeaders,
    HttpParams,
    HttpResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AvHttpClient {

    private _loading = false;

    constructor(private http: HttpClient) { }

    get loading(): boolean {
        return this._loading;
    }

    begin() {
        setTimeout(() => (this._loading = true));
    }

    end() {
        setTimeout(() => (this._loading = false));
    }

    parseParams(params: any): HttpParams {
        const newParams = {};
        Object.keys(params).forEach(key => {
            const data = params[key];
            // TODO
            newParams[key] = data;
        });
        return new HttpParams({ fromObject: newParams });
    }

    get(url: string, params?: any,
        options?: {
            headers?: HttpHeaders | { [header: string]: string | string[] };
            observe?: 'response' | 'body' | 'events';
            reportProgress?: boolean;
            responseType?: 'json' | 'arraybuffer' | 'blob' | 'text';
            withCredentials?: boolean;
        }): Observable<any>;

    get(url: string, params: any,
        options: {
            headers?: HttpHeaders | { [header: string]: string | string[] };
            observe?: 'response' | 'body' | 'events';
            reportProgress?: boolean;
            responseType?: 'json' | 'arraybuffer' | 'blob' | 'text';
            withCredentials?: boolean;
        }): Observable<any> {
        return this.request('GET', url, Object.assign({ params, }, options));
    }

    post(url: string, body?: any, params?: any,
        options?: {
            headers?: HttpHeaders | { [header: string]: string | string[] };
            observe?: 'body' | 'events' | 'response';
            reportProgress?: boolean;
            responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
            withCredentials?: boolean;
        }): Observable<any>;

    post(url: string, body: any, params: any,
        options: {
            headers?: HttpHeaders | { [header: string]: string | string[] };
            observe?: 'response' | 'body' | 'events';
            reportProgress?: boolean;
            responseType?: 'json' | 'arraybuffer' | 'blob' | 'text';
            withCredentials?: boolean;
        }): Observable<any> {
        return this.request('POST', url, Object.assign({ body, params }, options));
    }

    request(method: string, url: string,
        options?: {
            body?: any;
            headers?:
            | HttpHeaders
            | {
                [header: string]: string | string[];
            };
            observe?: 'body' | 'events' | 'response';
            params?:
            | HttpParams
            | {
                [param: string]: string | string[];
            };
            responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
            reportProgress?: boolean;
            withCredentials?: boolean;
        }): Observable<any> {
        this.begin();
        if (options && options.params) {
            options.params = this.parseParams(options.params);
        }
        return this.http.request(method, url, options).pipe(
            tap(() => {
                this.end();
            }), catchError(res => {
                this.end();
                return throwError(res);
            })
        );
    }
}
