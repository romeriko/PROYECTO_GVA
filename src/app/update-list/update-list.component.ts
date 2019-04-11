import {Component, OnInit} from '@angular/core';
import {DeviceService} from '../services/device/device.service';
import {Update} from '../models/update';

@Component({
  selector: 'app-update-list',
  templateUrl: './update-list.component.html',
  styleUrls: ['./update-list.component.css']
})
export class UpdateListComponent implements OnInit {

  public readonly fields = Update.table_fields;
  public readonly titles = Update.table_titles;
  public readonly links = Update.table_links;
  public rows: Array<Update> = [];
  loading = true;

  constructor(private deviceService: DeviceService) {
  }

  ngOnInit() {
    this.loadUpdates(null);
  }

  loadUpdates(type: string) {
    this.deviceService
      .getUpdates(type)
      .subscribe((resp: Array<Update>) => {
        this.loading = false;
        this.rows = resp;
      }, () => {
        this.loading = false;
      });
  }

}
