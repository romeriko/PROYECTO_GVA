import {Component, OnInit} from '@angular/core';
import {Device} from '../models/device';
import {DeviceService} from '../services/device/device.service';
import {Router} from '@angular/router';
import {NgxSmartModalService} from 'ngx-smart-modal';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {

  public readonly fields = Device.table_fields;
  public readonly titles = Device.table_titles;
  public rows = [];
  public loading = true;
  identifier = 'removeModalId';

  constructor(private deviceService: DeviceService,
              private modalService: NgxSmartModalService,
              private router: Router) {
    deviceService
      .load()
      .subscribe((response: Array<Device>) => {
        this.rows = response;
        this.loading = false;
      }, (error: any) => {
        this.loading = false;
      });
  }

  ngOnInit() {
  }

  showDeviceInfo($event) {
    this.loading = true;
    setTimeout(() => {
      this.router.navigate(['/device/'.concat($event.id)]);
    }, 800);
  }

  remove() {
    this.modalService.open(this.identifier);
  }
}
