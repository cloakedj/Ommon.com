import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionsTabComponent } from './competitions-tab.component';

describe('CompetitionsTabComponent', () => {
  let component: CompetitionsTabComponent;
  let fixture: ComponentFixture<CompetitionsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionsTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
