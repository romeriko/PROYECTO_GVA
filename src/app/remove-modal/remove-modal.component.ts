import {Component, Input, OnInit} from '@angular/core';
import {Device} from '../models/device';
import {DeviceService} from '../services/device/device.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgxSmartModalService} from 'ngx-smart-modal';
import {toast} from 'angular2-materialize';

@Component({
  selector: 'app-remove-modal',
  templateUrl: './remove-modal.component.html',
  styleUrls: ['./remove-modal.component.css']
})
export class RemoveModalComponent implements OnInit {

  @Input()
  devices: Array<Device>;

  size = 60;

  loading = false;
  @Input()
  identifier: string;

  removeDeviceForm: FormGroup;

  constructor(private deviceService: DeviceService,
              private formBuilder: FormBuilder,
              private modalService: NgxSmartModalService) {
    this.removeDeviceForm = formBuilder.group({
      device: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  submit() {
    this.loading = true;
    this.deviceService.removeDevice(this.removeDeviceForm.getRawValue())
      .subscribe(() => {
        this.modalService.close(this.identifier);
        this.loading = false;
        toast('Removiendo Dispositivo...', 4000);
      }, () => {
        this.loading = false;
        this.modalService.close(this.identifier);
        toast('Algo salio mal y no se pudo eliminar el dispositivo..!', 4000);
      });
  }
}
