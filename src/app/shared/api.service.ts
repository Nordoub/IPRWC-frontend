import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthorizationService} from './authorization.service';


@Injectable()
export class ApiService {

  constructor(private http: HttpClient, private authService: AuthorizationService) {
  }

  private createQueryString(queryParameters: Object): string {
    let queryString = '';
    if (typeof queryParameters === 'string') {
      queryString = '/${queryParameters}'
    }

    if (typeof queryParameters === 'object') {
      for (let key in queryParameters) {
        let value = queryParameters[key];
        let prefix = queryString.length === 0 ? '?' : '&';

        queryString += `${prefix}${key}=${value}`;
      }
    }

    return queryString;
  }

  private createRequestHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    this.authService.restoreAuthorization();
    var authKey = this.authService.createAuthorizationString()
    headers = headers.set('Authorization', authKey);
    return headers;
  }

  private createURI(path: string, queryParameters: Object): string {
    let queryString = this.createQueryString(queryParameters);
    return `/api/${path}${queryString}`;
  }

  public get <T>(path: string, queryParameters?: Object): Observable<T> {
    let uri = this.createURI(path, queryParameters);
    let headers = this.createRequestHeaders();
    return this.http.get<T>(uri, { headers: headers });
  }

  public post<T>(path: string, data: Object, queryParameters?: Object): Observable<T> {
    let uri = this.createURI(path, queryParameters);
    let headers = this.createRequestHeaders();

    return this.http.post<T>(uri, data, {headers: headers});
  }

  public put<T>(path: string, data: Object, queryParameters?: Object): Observable<T> {
    let uri = this.createURI(path, queryParameters);
    let headers = this.createRequestHeaders();
    return this.http.put<T>(uri, data, {headers: headers});
  }

  public delete <T>(path: string, queryParameters?: Object): Observable<T>  {
    let uri = this.createURI(path, queryParameters);
    let headers = this.createRequestHeaders();

    return this.http.delete<T>(uri, {headers: headers});
  }
}
