import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaborationsTabComponent } from './collaborations-tab.component';

describe('CollaborationsTabComponent', () => {
  let component: CollaborationsTabComponent;
  let fixture: ComponentFixture<CollaborationsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollaborationsTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollaborationsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
