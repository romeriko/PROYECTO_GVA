import {Component, OnInit} from '@angular/core';
import {Alert} from '../models/alert';
import {DeviceService} from '../services/device/device.service';

@Component({
  selector: 'app-alert-install',
  templateUrl: './alert-install.component.html',
  styleUrls: ['./alert-install.component.css']
})
export class AlertInstallComponent implements OnInit {

  alerts: Array<Alert> = [];

  loading = true;

  constructor(private deviceService: DeviceService) {
  }

  ngOnInit() {
    this.deviceService.getAlertsFromInstall()
      .subscribe((response: Array<Alert>) => {
        this.loading = false;
        this.alerts = response;
      }, () => {
        this.loading = false;
      });
  }

}
