export class User {
  private _id: number;
  private _name: string;
  private _email: string;
  private _phone: string;
  private _connectionDate: Date;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get phone(): string {
    return this._phone;
  }

  set phone(value: string) {
    this._phone = value;
  }

  get connectionDate(): Date {
    return this._connectionDate;
  }

  set connectionDate(value: Date) {
    this._connectionDate = value;
  }
}
