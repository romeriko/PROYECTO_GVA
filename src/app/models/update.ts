import {Validation} from './validation';

export class Update {

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get version(): string {
    return this._version;
  }

  set version(value: string) {
    this._version = value;
  }

  get creationDate(): Date {
    return this._creationDate;
  }

  set creationDate(value: Date) {
    this._creationDate = value;
  }

  get comments(): string {
    return this._comments;
  }

  set comments(value: string) {
    this._comments = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get validation(): Validation {
    return this._validation;
  }

  set validation(value: Validation) {
    this._validation = value;
  }

  public static table_fields = ['id', 'name', 'version', 'creationDate', 'deviceType'];
  public static table_titles = ['id', 'Nombre', 'Versión', 'Fecha de Creación', 'Tipo de Dispositivo'];
  public static table_links = {validationId: '_validation'};

  private _id: number;
  private _version: string;
  private _creationDate: Date;
  private _comments: string;
  private _type: string;
  private _name: string;
  private _validation: Validation;
}
