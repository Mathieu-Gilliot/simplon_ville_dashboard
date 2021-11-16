import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertListPageComponent } from './alert-list-page.component';

describe('AlertListPageComponent', () => {
  let component: AlertListPageComponent;
  let fixture: ComponentFixture<AlertListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
