import {Device} from './device';

export class Installation {
  public static table_fields = ['id', 'deviceId', 'updateId', 'lastUpdated', 'valid'];
  public static table_titles = ['id', 'Dispositivo', 'Actualización', 'Fecha Actualización', ''];
  public static table_links = {validation: '/validation/', updateId: 'update/', deviceId: 'device'};

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get device(): Device {
    return this._device;
  }

  set device(value: Device) {
    this._device = value;
  }

  get updateName(): string {
    return this._updateName;
  }

  set updateName(value: string) {
    this._updateName = value;
  }

  get updateVersion(): string {
    return this._updateVersion;
  }

  set updateVersion(value: string) {
    this._updateVersion = value;
  }

  get lastUpdated(): string {
    return this._lastUpdated;
  }

  set lastUpdated(value: string) {
    this._lastUpdated = value;
  }

  get firstUpdated(): string {
    return this._firstUpdated;
  }

  set firstUpdated(value: string) {
    this._firstUpdated = value;
  }

  get firstVersion(): string {
    return this._firstVersion;
  }

  set firstVersion(value: string) {
    this._firstVersion = value;
  }

  get validation(): string {
    return this._validation;
  }

  set validation(value: string) {
    this._validation = value;
  }

  get valid(): boolean {
    return this._valid;
  }

  set valid(value: boolean) {
    this._valid = value;
  }

  get currentlyInstalled(): boolean {
    return this._currentlyInstalled;
  }

  set currentlyInstalled(value: boolean) {
    this._currentlyInstalled = value;
  }

  get deviceId(): string {
    return this._deviceId;
  }

  set deviceId(value: string) {
    this._deviceId = value;
  }

  private _id: string;
  private _device: Device;
  private _updateName: string;
  private _updateVersion: string;
  private _lastUpdated: string;
  private _firstUpdated: string;
  private _firstVersion: string;
  private _validation: string;
  private _valid: boolean;
  private _currentlyInstalled: boolean;
  private _deviceId: string;

}
