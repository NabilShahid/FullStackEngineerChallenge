import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-performance-reviews',
  templateUrl: './admin-performance-reviews.component.html',
  styleUrls: ['./admin-performance-reviews.component.css']
})
export class AdminPerformanceReviewsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  visible = false;

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

}
