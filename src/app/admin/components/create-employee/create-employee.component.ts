import { ValidationService } from './../../../services/validation.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import PASSWORD_POLICY from '../../../constants/password-policy';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employeeForm: FormGroup;
  creatingEmployee:boolean=false;

  submitForm(): void {
    for (const i in this.employeeForm.controls) {
      this.employeeForm.controls[i].markAsDirty();
      this.employeeForm.controls[i].updateValueAndValidity();
    }
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.employeeForm.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.employeeForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }

  constructor(private fb: FormBuilder,private validationService:ValidationService) {}

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      username: [null, [Validators.minLength(3), Validators.required]],
      displayName: [null, [Validators.required]],
      password: [null, [Validators.minLength(PASSWORD_POLICY.MinLength),Validators.maxLength(PASSWORD_POLICY.MaxLength),Validators.required,this.validationService.passwordValidator]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]]
    });
  }

}
