import { StorageService } from "./../../../services/storage.service";
import { ApiService } from "./../../../services/api.service";
import {
  PerformanceReview,
  ReviewMeta
} from "./../../../../types/common-types";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user-main",
  templateUrl: "./user-main.component.html",
  styleUrls: ["./user-main.component.css"]
})
export class UserMainComponent implements OnInit {
  constructor(
    private apiService: ApiService,
    private storageService: StorageService
  ) {}
  assignedPerformanceReviews: Array<PerformanceReview>=[];
  selectedReviewInfo: ReviewMeta = {
    EmployeeId: "",
    PerformanceReviewId: ""
  };
  ngOnInit() {
    this.getAssingedReviews();
  }

  visible = false;

  open(): void {
    this.visible = true;
  }
  loadingReviews: boolean = false;

  close(): void {
    this.visible = false;
  }

  async getAssingedReviews() {
    this.loadingReviews = true;
    this.assignedPerformanceReviews = (await this.apiService.getAssignedReviews(
      this.storageService.user.EmployeeId
    )) as Array<PerformanceReview>;
    this.loadingReviews = false;
  }

  getReviewMeta(feedbackMeta: ReviewMeta) {
    this.selectedReviewInfo = feedbackMeta;
    this.visible = true;
  }
}
