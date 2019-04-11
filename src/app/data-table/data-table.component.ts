import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  @Input()
  fields: Array<string> = [];

  @Input()
  titles: Array<string> = [];

  @Input()
  links = {};

  @Input()
  rows: Array<any> = [];

  @Output()
  itemClicked = new EventEmitter();

  @Output()
  doubleClicked = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  itemClick(field, value) {
    const event = {
      field: field,
      value: value
    };
    this.itemClicked.emit(event);
  }

  wasDoubleClicked(row: any) {
    this.doubleClicked.emit(row);
  }
}
