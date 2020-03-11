import { StorageService } from "./../../../services/storage.service";
import { ApiService } from "./../../../services/api.service";
import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { NzMessageService } from "ng-zorro-antd/message";
import MESSAGES from "src/app/constants/messages";

@Component({
  selector: "app-submit-feeback",
  templateUrl: "./submit-feeback.component.html",
  styleUrls: ["./submit-feeback.component.css"]
})
export class SubmitFeebackComponent implements OnInit {
  constructor(
    private apiService: ApiService,
    private message: NzMessageService,
    private storageService: StorageService
  ) {}
  @Input() performanceReviewId: string;
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
      this.performanceReviewId,
      this.storageService.user.EmployeeId,
      this.comments,
      this.ratingHardWork || 0,
      this.ratingCommitment || 0,
      this.ratingPunctuality || 0,
      this.ratingTeamPlayer || 0,
      this.ratingHonesty || 0
    );
    this.message.create("success", MESSAGES.FeedbackSubmitSuccess);
    this.closeDrawer.emit();

    this.submitting = false;
  }
}
