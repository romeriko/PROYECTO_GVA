import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationCodeModalComponent } from './confirmation-code-modal.component';

describe('ConfirmationCodeModalComponent', () => {
  let component: ConfirmationCodeModalComponent;
  let fixture: ComponentFixture<ConfirmationCodeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmationCodeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationCodeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
