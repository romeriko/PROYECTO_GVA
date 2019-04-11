export class ModalInstance {
  private _title: string;
  private _identifier: string;
  private _size = 80;
  private _data: any = [];
  private _fields: Array<string> = [];
  private _titles: Array<string> = [];

  public static builder() {
    return new ModalInstance();
  }

  public withTitle(title: string): ModalInstance {
    this.title = title;
    return this;
  }

  public withIdentifier(identifier: string): ModalInstance {
    this.identifier = identifier;
    return this;
  }

  public withFields(fields: Array<string>): ModalInstance {
    this.fields = fields;
    return this;
  }

  public withTitles(titles: Array<string>): ModalInstance {
    this.titles = titles;
    return this;
  }

  public withSize(size: number): ModalInstance {
    this.size = size;
    return this;
  }

  public withData(data: any): ModalInstance {
    this.data = data;
    return this;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get identifier(): string {
    return this._identifier;
  }

  set identifier(value: string) {
    this._identifier = value;
  }

  get size(): number {
    return this._size;
  }

  set size(value: number) {
    this._size = value;
  }

  get data(): any {
    return this._data;
  }

  set data(value: any) {
    this._data = value;
  }

  get fields(): Array<string> {
    return this._fields;
  }

  set fields(value: Array<string>) {
    this._fields = value;
  }

  get titles(): Array<string> {
    return this._titles;
  }

  set titles(value: Array<string>) {
    this._titles = value;
  }

}
