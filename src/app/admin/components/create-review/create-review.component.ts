import { StorageService } from "./../../../services/storage.service";
import { ApiService } from "./../../../services/api.service";
import { UserPickerOptions } from "./../../../../types/common-types";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { NzMessageService } from "ng-zorro-antd/message";
import MESSAGES from "src/app/constants/messages";
@Component({
  selector: "app-create-review",
  templateUrl: "./create-review.component.html",
  styleUrls: ["./create-review.component.css"]
})
export class CreateReviewComponent implements OnInit {
  constructor(
    private apiService: ApiService,
    private message: NzMessageService,
    private storageService: StorageService
  ) {}
  singlePickerOptions: UserPickerOptions = {
    Mode: "default",
    ExcludeUsers: [this.storageService.user.EmployeeId]
  };
  multiPickerOptions: UserPickerOptions = {
    Mode: "multiple",
    ExcludeUsers: [this.storageService.user.EmployeeId]
  };
  employeeId: string;
  assignees: Array<string>;
  creatingReview: boolean = false;
  @Output() closeDrawer = new EventEmitter();
  ngOnInit() {}
  async createPerformanceReview() {
    this.creatingReview = true;
    await this.apiService.createPerformanceReview(
      this.employeeId,
      this.assignees
    );
    this.message.create("success", MESSAGES.CreateReviewSuccess);

    this.creatingReview = false;
    this.closeDrawer.emit();
  }
  updateMultipleExcludeUsers(id: string): void {
    this.multiPickerOptions.ExcludeUsers = [
      this.storageService.user.EmployeeId,
      id
    ];
  }
}
