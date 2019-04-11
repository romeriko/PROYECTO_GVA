import {Injectable} from '@angular/core';
import {GvaClientService} from '../gva-client.service';
import {Observable} from 'rxjs';
import {Device} from '../../models/device';
import {Installation} from '../../models/installation';
import {Update} from '../../models/update';
import {Alert} from '../../models/alert';
import {Session} from '../../models/session';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  private deviceUrl = 'api/device';
  private installUrl = 'api/device/installations';
  private alertUrl = 'api/device/alert';
  private updateUrl = 'api/device/updates?device=';

  constructor(private httpClient: GvaClientService) {
  }

  public load(): Observable<Array<Device>> {
    return this.httpClient.get<Array<Device>>(this.deviceUrl);
  }

  public getInstalled(): Observable<Array<Installation>> {
    return this.httpClient.get<Array<Installation>>(this.installUrl);
  }

  public getUpdates(type: string): Observable<Array<Update>> {
    return this.httpClient.get<Array<Update>>(this.updateUrl.concat(type));
  }

  public getAlerts(): Observable<Array<Alert>> {
    return this.httpClient.get<Array<Alert>>(this.alertUrl);
  }

  public getAlertsFromInstall(): Observable<Array<Alert>> {
    return this.httpClient.get<Array<Alert>>(this.alertUrl.concat('/install'));
  }

  public get(deviceId: string): Observable<Device> {
    return this.httpClient.get<Device>(this.deviceUrl.concat('?device=').concat(deviceId));
  }

  installUpdate(updateInfo: any): Observable<Device> {
    const session = Session.current();
    updateInfo.user = session.user.id;
    return this.httpClient.post<Device>(this.installUrl, updateInfo);
  }

  removeDevice(obj): Observable<Device> {
    const session = Session.current();
    return this.httpClient.delete<Device>(this.deviceUrl
      .concat(`/remove?deviceId=${obj.device}&user=${session.user.id}&password=${obj.password}`));
  }

  save(device: Device): Observable<Device> {
    return this.httpClient.post<Device>(this.deviceUrl, device);
  }

  changeDeviceWorkingStatus(device: string, funct: string, param: string) {
    const qs = `?device=${device}&function=${funct}&param=${param}`;
    return this.httpClient.post(this.deviceUrl.concat('/function/call') + qs);
  }

  getDeviceWorkingStatus(device: string, variable: string) {
    const qs = `?device=${device}&variable=${variable}`;
    return this.httpClient.get(this.deviceUrl.concat('/function/variable') + qs);
  }

  logs(id: string, page = 0) {
    const qs = `?id=${id}&page=${page}`;
    return this.httpClient.get(this.deviceUrl.concat('/logs') + qs);
  }
}
