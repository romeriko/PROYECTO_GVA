import {Injectable} from '@angular/core';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GvaClientService extends HttpClient {


  public constructor(handler: HttpHandler) {
    super(handler);
  }

  public get<T>(url: string, options?: Object): Observable<T> {
    return super.get<T>(url, options);
  }

  public post<T>(url: string, body?: any | null, options?: Object): Observable<T> {
    return super.post<T>(url, body, options);
  }

  public put<T>(url: string, body?: any | null, options?: Object): Observable<T> {
    return super.put<T>(url, body, options);
  }

}
