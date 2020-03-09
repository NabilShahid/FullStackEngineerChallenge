/**
 * CreateEmployeeComponent
 * Contains Form builder for employee form. Collects and validates employee information.
 * Creates employee using creation api from api-service on form submit.
 */
import { ApiService } from "./../../../services/api.service";
import { Employee } from "./../../../../types/common-types";
import { ValidationService } from "./../../../services/validation.service";
import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import PASSWORD_POLICY from "../../../constants/password-policy";
import PG_FUNCTION_STATUSES from "src/app/constants/pg-function-statuses";
import { NzMessageService } from "ng-zorro-antd/message";
import MESSAGES from "src/app/constants/messages";

@Component({
  selector: "app-create-employee",
  templateUrl: "./create-employee.component.html",
  styleUrls: ["./create-employee.component.css"]
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  creatingEmployee: boolean = false;

  async submitForm(): Promise<void> {
    for (const i in this.employeeForm.controls) {
      this.employeeForm.controls[i].markAsDirty();
      this.employeeForm.controls[i].updateValueAndValidity();
    }
    if (!this.employeeForm.valid) {
      this.message.create("warning", MESSAGES.InvalidForm);
    }
    this.creatingEmployee = true;
    const response: any = await this.apiService.createEmployee(
      this.getEmployeeObjectFromForm()
    );
    if (response.Result === PG_FUNCTION_STATUSES.DuplicateUserName) {
      this.message.create("error", MESSAGES.DuplicationEmployeeUserName);
    } else {
      this.message.create("success", MESSAGES.CreateEmployeeSuccess);
    }

    this.creatingEmployee = false;
  }

  getEmployeeObjectFromForm(): Employee {
    return {
      DisplayName: this.employeeForm.get("displayName").value,
      UserName: this.employeeForm.get("username").value,
      Password: this.employeeForm.get("password").value,
      PhoneNumber:
        this.employeeForm.get("phoneNumberPrefix").value +
        "-" +
        this.employeeForm.get("phoneNumber").value
    };
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() =>
      this.employeeForm.controls.checkPassword.updateValueAndValidity()
    );
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.employeeForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  constructor(
    private fb: FormBuilder,
    private validationService: ValidationService,
    private apiService: ApiService,
    private message: NzMessageService
  ) {}

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      username: [null, [Validators.required]],
      displayName: [null, [Validators.required]],
      phoneNumber: [null, [Validators.required]],
      phoneNumberPrefix: [
        "+86",
        [Validators.required, Validators.maxLength(20)]
      ],
      password: [
        null,
        [Validators.required, this.validationService.passwordValidator]
      ],
      checkPassword: [null, [Validators.required, this.confirmationValidator]]
    });
  }
}
