import {AfterViewInit, Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {DeviceService} from '../services/device/device.service';
import {Device} from '../models/device';
import {NgxSmartModalService} from 'ngx-smart-modal';
import {toast} from 'angular2-materialize';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements AfterViewInit {

  deviceForm: FormGroup;
  title: string;
  deviceId: string;
  device: Device;
  active = false;
  deviceWorking = 'off';
  ignore = false;
  loading = true;

  constructor(route: ActivatedRoute,
              formBuilder: FormBuilder,
              private router: Router,
              private modalService: NgxSmartModalService,
              private deviceService: DeviceService) {
    route.params
      .forEach((params: Params) => {
        this.deviceId = params['id'];
        this.title = this.deviceId === 'add' ? 'Agregar nuevo dispositivo' : `Edición Dispositivo ${this.deviceId}`;
        this.loadDevice();
      });
    this.deviceForm = formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      ip: [''],
      connection: [''],
      updated: [''],
      status: [''],
      type: ['', Validators.required],
      allowCorrupt: [false, Validators.required],
      version: [false],
      automaticUpdated: [false, Validators.required],
    });
  }

  isOld() {
    return this.deviceId !== 'add';
  }

  loadDevice() {
    if (this.isOld()) {
      this.deviceService
        .get(this.deviceId)
        .subscribe((device: Device) => {
          this.loading = false;
          this.device = device;
          device.connection = new Date(device.lastConnection).toISOString().substring(0, 10);
          device.updated = new Date(device.lastUpdate).toISOString().substring(0, 10);
          device.connection = new Date(device.lastConnection).toISOString().substring(0, 10);
          device.updated = new Date(device.lastUpdate).toISOString().substring(0, 10);
          this.deviceForm.patchValue(device);
          this.active = true;
        }, () => {
          this.loading = false;
          toast('Error cargando informacion del dispositivo..!', 4000);
        });
    } else {
      const device = new Device();
      this.device = device;
      device.connection = new Date().toISOString().substring(0, 10);
      device.updated = new Date().toISOString().substring(0, 10);
      setTimeout(() => {
        this.loading = false;
        this.deviceForm.patchValue(device);
        this.active = true;
      }, 500);

    }
  }

  openModal() {
    this.modalService.open('updateModalComponent');
  }

  saveChanges() {
    this.loading = true;
    const device: Device = this.device;
    const deviceForm = this.deviceForm.getRawValue();
    device.allowCorrupt = JSON.parse(deviceForm.allowCorrupt);
    device.automaticUpdated = JSON.parse(deviceForm.automaticUpdated);
    device.name = deviceForm.name;
    device.type = deviceForm.type;
    device.ip = deviceForm.ip;
    device.id = deviceForm.id;
    device.lastConnection = new Date(device.lastConnection);
    device.lastUpdate = new Date(device.lastUpdate);
    device.typeName = device.type;
    device.type = null;
    device.old = this.isOld();
    this.deviceService
      .save(device)
      .subscribe(() => {
        this.loading = false;
        toast('Cambios guardados.', 4000);
        this.router.navigate(['/device/'.concat(device.id)]);
      }, (error) => {
        this.loading = false;
        console.log(error);
        toast(error.error.message, 4000);
      });
  }

  changeWork() {
    this.loading = true;
    if (this.ignore) {
      this.ignore = false;
      this.loading = false;
    } else {
      if (this.deviceWorking === 'off') {
        this.deviceWorking = 'on';
      } else {
        this.deviceWorking = 'off';
      }
      this.deviceService
        .changeDeviceWorkingStatus(this.device.id, this.deviceWorking, this.deviceWorking)
        .subscribe((response) => {
          this.loading = false;
          toast('Cambios efectuados.', 4000);
        }, (error) => {
          this.loading = false;
          toast('Error modificando estado del dispositivo.', 10000);
        });
    }
  }

  ngAfterViewInit(): void {
    this.loading = true;
    this.deviceService
      .getDeviceWorkingStatus(this.deviceId, 'run')
      .subscribe((resp: any) => {
        this.loading = false;
        if (resp.result === true) {
          this.deviceWorking = 'on';
        } else {
          this.ignore = true;
          $('#ckb').click();
          this.deviceWorking = 'off';
        }
      }, (err) => {
        this.loading = false;
        toast('Error cargando estado de dispositivo.', 10000);
      });
  }
}
