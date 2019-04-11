import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertInstallComponent } from './alert-install.component';

describe('AlertInstallComponent', () => {
  let component: AlertInstallComponent;
  let fixture: ComponentFixture<AlertInstallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertInstallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertInstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
