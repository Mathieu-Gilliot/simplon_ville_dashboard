import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbdToastCustomheaderComponent } from './ngbd-toast-customheader.component';

describe('NgbdToastCustomheaderComponent', () => {
  let component: NgbdToastCustomheaderComponent;
  let fixture: ComponentFixture<NgbdToastCustomheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgbdToastCustomheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbdToastCustomheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
