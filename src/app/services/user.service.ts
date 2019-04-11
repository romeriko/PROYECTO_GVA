import {Injectable} from '@angular/core';
import {GvaClientService} from './gva-client.service';
import {Observable} from 'rxjs';
import {User} from '../models/user';
import {Error} from '../models/error';
import {Login} from '../models/login';
import {Session} from '../models/session';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly authUrl = 'api/user/auth';
  private readonly validUrl = 'api/user/valid';
  private readonly logoutUrl = 'api/user/logout';

  constructor(private httpClient: GvaClientService) {
  }

  public auth(login: Login): Observable<Session | Error> {
    return this.httpClient.post<Session | Error>(this.authUrl, login);
  }

  public valid(): Observable<Session | Error> {
    const session = Session.current();
    const options = {
      headers: new HttpHeaders({
        'X-Auth-Token': session.token,
      })
    };
    return this.httpClient.get<Session | Error>(this.validUrl, options);
  }

  public logout(): Observable<User | Error> {
    const session = Session.current();
    const options = {
      headers: new HttpHeaders({
        'X-Auth-Token': session.token,
      })
    };
    return this.httpClient.post<User | Error>(this.logoutUrl, {}, options);
  }
}
