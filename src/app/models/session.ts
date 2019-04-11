import {User} from './user';

export class Session {
  get code(): number {
    return this._code;
  }

  set code(value: number) {
    this._code = value;
  }

  get token(): string {
    return this._token;
  }

  set token(value: string) {
    this._token = value;
  }

  get valid(): boolean {
    return this._valid;
  }

  set valid(value: boolean) {
    this._valid = value;
  }

  get created(): Date {
    return this._created;
  }

  set created(value: Date) {
    this._created = value;
  }

  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }

  private _token: string;
  private _valid: boolean;
  private _created: Date;
  private _user: User;
  private _code: number;

  public static current() {
    const session = localStorage.getItem('session');
    if (session) {
      return JSON.parse(session);
    }
    return Session.no_session();
  }

  private static no_session() {
    return new Session();
  }
}
