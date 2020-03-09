import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPerformanceReviewsComponent } from './admin-performance-reviews.component';

describe('AdminPerformanceReviewsComponent', () => {
  let component: AdminPerformanceReviewsComponent;
  let fixture: ComponentFixture<AdminPerformanceReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPerformanceReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPerformanceReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
