import { StorageService } from "./../../services/storage.service";
import { ApiService } from "./../../services/api.service";
/**
 * LoginComponent
 * Component responsbile for login form view.
 * After entering credentials, and clicking login, api call is made to server and
 * user is redirected to either admin, or normal user type in the response OR is shown error message
 * if incorrect credentials are added.
 */
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import MESSAGES from "src/app/constants/messages";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  logingIn: boolean = false;
  loginErrorMsg: string;
  submitForm(): void {
    for (const i in this.loginForm.controls) {
      this.loginForm.controls[i].markAsDirty();
      this.loginForm.controls[i].updateValueAndValidity();
    }
    if (!this.loginForm.valid) {
      return;
    }
    this.authenticateUser();
  }

  constructor(
    private fb: FormBuilder,
    private rtr: Router,
    private apiService: ApiService,
    private storageService: StorageService
  ) {}

  /**
   * authenticate user, save in storage and naviate to admin screen if admin
   * else navigate to normal user screen
   */
  async authenticateUser(): Promise<void> {
    this.logingIn = true;
    const loginResult: any = await this.apiService.login(
      this.loginForm.get("userName").value,
      this.loginForm.get("password").value
    );
    this.logingIn = false;
    if (loginResult) {
      this.storageService.user = loginResult;
      this.navigateUser(loginResult.IsAdmin);
    } else {
      this.loginErrorMsg = MESSAGES.InvalidCredentials;
    }
  }
  navigateUser(isAdmin: boolean) {
    if (isAdmin) {
      this.rtr.navigate(["admin"]);
    } else {
      this.rtr.navigate(["user"]);
    }
  }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
    this.loginIfAuthenticated();
  }
  loginIfAuthenticated(): void {
    if (this.storageService.user.EmployeeId) {
      this.navigateUser(this.storageService.user.IsAdmin);
    }
  }
}
