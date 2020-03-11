import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-reviews-list",
  templateUrl: "./reviews-list.component.html",
  styleUrls: ["./reviews-list.component.css"]
})
export class ReviewsListComponent implements OnInit {
  @Input() data = [];
  @Input() adminMode: boolean = false;
  ngOnInit(): void {}
  @Output() submitFeedback = new EventEmitter();
  @Output() updateAssignees = new EventEmitter();
  @Output() viewReviews = new EventEmitter();

  
}
