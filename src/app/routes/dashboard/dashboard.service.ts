import { Injectable } from '@angular/core';
import { AvHttpClient } from '../../core/net/http';
import { Observable } from 'rxjs';

@Injectable()
export class DashboardService {
    
    constructor( private http: AvHttpClient) {}

    getItem(): Observable<any> {
        return this.http.get('api/dashboard');
    }
}
