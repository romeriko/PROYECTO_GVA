import {Component, Input, OnInit} from '@angular/core';
import {DeviceService} from '../services/device/device.service';
import {Update} from '../models/update';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgxSmartModalService} from 'ngx-smart-modal';
import {toast} from 'angular2-materialize';

@Component({
  selector: 'app-update-modal',
  templateUrl: './update-modal.component.html',
  styleUrls: ['./update-modal.component.css']
})
export class UpdateModalComponent implements OnInit {

  @Input()
  device: string;

  @Input()
  type: string;

  size = 60;
  loading = false;
  title = 'Actualizando Dispositivo';
  identifier = 'updateModalComponent';
  updates: Array<Update> = [];
  deviceUpdateForm: FormGroup;

  constructor(private deviceService: DeviceService,
              private formBuilder: FormBuilder,
              private modalService: NgxSmartModalService) {
    this.deviceUpdateForm = formBuilder.group({
      update: ['', Validators.required],
      device: [this.device, Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.deviceService
      .getUpdates(this.type)
      .subscribe((updates) => {
        this.updates = updates;
      });
    this.deviceUpdateForm.patchValue({device: this.device});
  }

  submit() {
    this.loading = true;
    this.deviceService
      .installUpdate(this.deviceUpdateForm.getRawValue())
      .subscribe(() => {
        this.loading = false;
        this.modalService.close(this.identifier);
        // updateModal.close();
        toast('Actualizando Dispositivo...', 4000);
      }, () => {
        this.modalService.close(this.identifier);
        this.loading = false;
        toast('Algo salio mal con la actualización..!', 4000);
      });
  }
}
