import {Component, OnInit} from '@angular/core';
import {DeviceService} from '../services/device/device.service';
import {Alert} from '../models/alert';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  alerts: Array<Alert> = [];
  loading = true;

  constructor(private deviceService: DeviceService) {
  }

  ngOnInit() {
    this.deviceService.getAlerts()
      .subscribe((response: Array<Alert>) => {
        this.loading = false;
        this.alerts = response;
      }, () => {
        this.loading = false;
      });
  }

}
