import { ApiService } from "./../../../services/api.service";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { NzMessageService } from "ng-zorro-antd/message";
import MESSAGES from "src/app/constants/messages";

@Component({
  selector: "app-submit-feeback",
  templateUrl: "./submit-feeback.component.html",
  styleUrls: ["./submit-feeback.component.css"]
})
export class SubmitFeebackComponent implements OnInit {
  constructor(private apiService: ApiService,    private message: NzMessageService,
    ) {}
  performanceReviewId: string;
  employeeId: string;
  comments: string;
  ratingHardWork: number;
  ratingCommitment: number;
  ratingPunctuality: number;
  ratingTeamPlayer: number;
  ratingHonesty: number;
  submitting: boolean = false;
  @Output() closeDrawer = new EventEmitter();

  ngOnInit() {}
  async submitFeedback() {
    this.submitting = true;
    await this.apiService.submitFeedback(
      'f8aadb86-5cd8-4b57-bcf6-f5f1b91719cb',
      "4e691be5-811d-4e8a-ae6e-744961f6a820",
      this.comments,
      this.ratingHardWork,
      this.ratingCommitment,
      this.ratingPunctuality,
      this.ratingTeamPlayer,
      this.ratingHonesty
    );
    this.message.create("success", MESSAGES.FeedbackSubmitSuccess);
    this.closeDrawer.emit();

    this.submitting = false;
  }
}
