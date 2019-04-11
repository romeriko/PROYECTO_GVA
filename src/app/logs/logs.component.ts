import {Component, OnInit} from '@angular/core';
import {DeviceService} from '../services/device/device.service';
import {Device} from '../models/device';
import {LogDevice} from '../models/LogDevice';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {


  public readonly fields = LogDevice.table_fields;
  public readonly titles = LogDevice.table_titles;
  loading = true;
  devices: Array<Device> = [];
  device = null;
  logs: Array<LogDevice> = [];

  constructor(private deviceService: DeviceService) {
  }

  ngOnInit() {
    this.deviceService
      .load()
      .subscribe((response: Array<Device>) => {
        this.devices = response;
        this.device = response[0].id;
        this.loading = false;
        this.loadLogs();
      }, (error: any) => {
        this.loading = false;
      });
  }

  loadLogs() {
    this.loading = true;
    this.deviceService
      .logs(this.device)
      .subscribe((res: Array<LogDevice>) => {
        this.loading = false;
        this.logs = res;
      }, () => {
        this.loading = false;
      });
  }
}
