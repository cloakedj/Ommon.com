import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendNavbarComponent } from './attend-navbar.component';

describe('AttendNavbarComponent', () => {
  let component: AttendNavbarComponent;
  let fixture: ComponentFixture<AttendNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
