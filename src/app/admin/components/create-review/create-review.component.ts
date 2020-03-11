import { StorageService } from "./../../../services/storage.service";
import { ApiService } from "./../../../services/api.service";
import {
  UserPickerOptions,
  EmployeeSearchResult
} from "./../../../../types/common-types";
import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
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
  @Input() editMode: string;
  singlePickerOptions: UserPickerOptions = {
    Mode: "default",
    ExcludeUsers: [this.storageService.user.EmployeeId]
  };
  multiPickerOptions: UserPickerOptions = {
    Mode: "multiple",
    ExcludeUsers: [this.storageService.user.EmployeeId]
  };
  @Input() employeeId: string;
  @Input() employeeName: string;
  @Input() performanceReviewId: string;
  @Input("assignees") set assigneesSetter(value) {
    this.assignees = value.map(e => e.EmployeeId);
    this.originalAssignees = value;
  }
  assignees: Array<string>;
  originalAssignees: Array<string>;
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

  async manageReviewAssignees() {
    if(this.assignees.length==0){
      this.message.create("warning",MESSAGES.AssigneeRequired);
      return;
    }
    this.creatingReview = true;
    const assigneesToAdd = this.assignees.filter(a => {
      return !this.originalAssignees.map((oa:any)=>oa.EmployeeId).includes(a);
    });
    const assigneesToRemove = this.originalAssignees
      .map((a: any) => a.EmployeeId)
      .filter(a => {
        return !this.assignees.includes(a);
      });
    await this.apiService.manageReviewAssignees(
      this.performanceReviewId,
      assigneesToAdd,
      assigneesToRemove
    );
    this.creatingReview = false;
    this.closeDrawer.emit();
  }
}
