/**
 * CreateEmployeeComponent
 * Contains Form builder for employee form. Collects and validates employee information.
 * Creates employee using creation api from api-service on form submit. 
 */
import { ApiService } from './../../../services/api.service';
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

@Component({
  selector: "app-create-employee",
  templateUrl: "./create-employee.component.html",
  styleUrls: ["./create-employee.component.css"]
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  creatingEmployee: boolean = false;
 
  async submitForm(): Promise<void> {
    // for (const i in this.employeeForm.controls) {
    //   this.employeeForm.controls[i].markAsDirty();
    //   this.employeeForm.controls[i].updateValueAndValidity();
    // }
    this.creatingEmployee=true;
    await this.apiService.createEmployee(this.getEmployeeObjectFromForm());
    this.creatingEmployee=false;

  }

  getEmployeeObjectFromForm(): Employee {
    return {
      DisplayName: this.employeeForm.get("displayName").value,
      UserName: this.employeeForm.get("username").value,
      Password: this.employeeForm.get("password").value
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
    private apiService:ApiService
  ) {}

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      username: [null, [Validators.minLength(3), Validators.required]],
      displayName: [null, [Validators.required]],
      password: [
        null,
        [
          Validators.minLength(PASSWORD_POLICY.MinLength),
          Validators.maxLength(PASSWORD_POLICY.MaxLength),
          Validators.required,
          this.validationService.passwordValidator
        ]
      ],
      checkPassword: [null, [Validators.required, this.confirmationValidator]]
    });
  }
}
