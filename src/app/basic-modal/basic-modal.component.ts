import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-basic-modal',
  templateUrl: './basic-modal.component.html',
  styleUrls: ['./basic-modal.component.css']
})
export class BasicModalComponent implements OnInit {

  @Input()
  identifier = 'modalOfNone';

  @Input()
  title = 'Modal of None';

  @Input()
  size = 80;

  @Input()
  data = [];

  @Input()
  fields: Array<string> = [];

  @Input()
  titles: Array<string> = [];

  constructor() {
  }

  ngOnInit() {
  }

}
