import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoashboardsComponent } from './doashboards.component';

describe('DoashboardsComponent', () => {
  let component: DoashboardsComponent;
  let fixture: ComponentFixture<DoashboardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoashboardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoashboardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
