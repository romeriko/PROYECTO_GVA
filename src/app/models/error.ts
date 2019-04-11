export class Error {
  private _message: string;
  private _status: string;

  get message(): string {
    return this._message;
  }

  set message(value: string) {
    this._message = value;
  }

  get status(): string {
    return this._status;
  }

  set status(value: string) {
    this._status = value;
  }
}
