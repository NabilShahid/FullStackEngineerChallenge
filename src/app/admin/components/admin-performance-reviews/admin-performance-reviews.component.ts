import { ApiService } from "./../../../services/api.service";
import { Component, OnInit } from "@angular/core";
import { PerformanceReview } from "../../../../types/common-types";

@Component({
  selector: "app-admin-performance-reviews",
  templateUrl: "./admin-performance-reviews.component.html",
  styleUrls: ["./admin-performance-reviews.component.css"]
})
export class AdminPerformanceReviewsComponent implements OnInit {
  constructor(private apiService: ApiService) {}
  allPerformanceReviews: Array<PerformanceReview>=[];
  ngOnInit() {
    this.getAllPerformanceReviews();
  }
  visible = false;
  loadingReviews: boolean = false;
  editMode:boolean=true;

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
  convertDatesToLocal(){};
  async getAllPerformanceReviews() {
    this.loadingReviews = true;
    this.allPerformanceReviews = (await this.apiService.getAllPerformanceReviews()) as Array<
      PerformanceReview
    >;
    this.loadingReviews = false;
  }
  async getSubmittedReviews({PerformanceReviewId}){
   this.submittedReviews= await this.apiService.getSubmittedReviews(PerformanceReviewId);
   this.reviewsVisible=true;
  }
  reviewsVisible=false;
  currentReviewMeta={};
  submittedReviews;
}
