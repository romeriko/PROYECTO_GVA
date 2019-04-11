import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-confirmation-code-modal',
  templateUrl: './confirmation-code-modal.component.html',
  styleUrls: ['./confirmation-code-modal.component.css']
})
export class ConfirmationCodeModalComponent implements OnInit {

  @Output()
  codeInserted = new EventEmitter();

  @Input()
  code: number;

  codeForm: FormGroup;
  public validating: boolean;

  constructor(formBuilder: FormBuilder) {
    this.codeForm = formBuilder.group({
      code: [null, Validators.required, Validators.maxLength(6), Validators.minLength(6)]
    });
  }

  ngOnInit() {
  }

  submit() {
    const form = this.codeForm.getRawValue();
    this.validating = true;
    setTimeout(
      () => {
        if (this.code === form.code) {
          this.codeInserted.emit();
        }
        this.validating = false;
      },
      1000
    );
  }
}
