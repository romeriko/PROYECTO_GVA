export class Alert {
  private _id: string;
  private _device: string;
  private _topic: string;
  private _status: string;
  private _document: string;
  private _message: string;
  private _style: string;

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get device(): string {
    return this._device;
  }

  set device(value: string) {
    this._device = value;
  }

  get topic(): string {
    return this._topic;
  }

  set topic(value: string) {
    this._topic = value;
  }

  get status(): string {
    return this._status;
  }

  set status(value: string) {
    this._status = value;
  }

  get document(): string {
    return this._document;
  }

  set document(value: string) {
    this._document = value;
  }

  get message(): string {
    return this._message;
  }

  set message(value: string) {
    this._message = value;
  }

  get style(): string {
    return this._style;
  }

  set style(value: string) {
    this._style = value;
  }
}
