import {Component, OnInit} from '@angular/core';
import {Installation} from '../models/installation';
import {DeviceService} from '../services/device/device.service';
import {NgxSmartModalService} from 'ngx-smart-modal';
import {ModalInstance} from '../models/modal-instance';
import {Device} from '../models/device';

@Component({
  selector: 'app-installation',
  templateUrl: './installation.component.html',
  styleUrls: ['./installation.component.css']
})
export class InstallationComponent implements OnInit {

  public readonly fields = Installation.table_fields;
  public readonly titles = Installation.table_titles;
  public readonly links = Installation.table_links;
  public rows: Array<Installation> = [];
  loading = true;

  public deviceModal: ModalInstance = ModalInstance.builder()
    .withSize(100)
    .withIdentifier('device')
    .withTitles(Device.table_titles)
    .withFields(Device.table_fields)
    .withTitle('Mostrando Dispositivo');

  constructor(private deviceService: DeviceService,
              private modalService: NgxSmartModalService) {
    this.deviceService
      .getInstalled()
      .subscribe((response: Array<Installation>) => {
        this.loading = false;
        this.rows = response;
        // this.loadDeviceModal();
      }, () => {
        this.loading = false;
      });
  }

  ngOnInit() {
  }


  loadDeviceModal($event) {
    this.deviceModal.withData([$event.field]);
    this.modalService.open('device');
  }
}
