import { Employee } from "./../../types/common-types";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import API_OPERATIONS from "../constants/api-operactions";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private http: HttpClient) {}
  httpOptions = {};
  createEmployee(employeeObject: Employee) {
    return this.performPostRequest(
      "createEmployee",
      API_OPERATIONS.AdminOperations,
      employeeObject
    );
  }
  createPerformanceReview(employeeId: string, assignees: Array<string>) {
    return this.performPostRequest(
      "createPerformanceReview",
      API_OPERATIONS.AdminOperations,
      {
        EmployeeId: employeeId,
        Assignees: assignees
      }
    );
  }
  submitFeedback(
    performanceReviewId: string,
    employeeId: string,
    comments: string,
    ratingHardWork: number,
    ratingCommitment: number,
    ratingPunctuality: number,
    ratingTeamPlayer: number,
    ratingHonesty: number
  ) {
    return this.performPutRequest(
      "submitFeedback",
      API_OPERATIONS.UserOperations,
      {
        PerformanceReviewId: performanceReviewId,
        EmployeeId: employeeId,
        Comments: comments,
        RatingHardWork: ratingHardWork,
        RatingCommitment: ratingCommitment,
        RatingPunctuality: ratingPunctuality,
        RatingTeamPlayer: ratingTeamPlayer,
        RatingHonesty: ratingHonesty
      }
    );
  }
  getEmployees(startIndex, pageSize, orderBy, order, searchString) {
    return this.performGetRequest(
      `getEmployees?startIndex=${startIndex}&pageSize=${pageSize}&searchString=${searchString}&order=${order}`,
      API_OPERATIONS.AdminOperations
    );
  }
  getAssignedReviews(employeeId: string) {
    return this.performGetRequest(
      `getAssignedReviews?employeeId=${employeeId}`,
      API_OPERATIONS.UserOperations
    );
  }
  manageReviewAssignees(
    performanceReviewId: string,
    assigneesToAdd: Array<string>,
    assigneesToRemove: Array<string>
  ) {
    return this.performPutRequest(
      `manageReviewAssignees`,
      API_OPERATIONS.AdminOperations,
      {
        PerformanceReviewId: performanceReviewId,
        AssigneesToAdd: assigneesToAdd,
        AssigneesToRemove: assigneesToRemove
      }
    );
  }
  updateEmployee(employeeId: string, displayName: string, phoneNumber: string) {
    return this.performPutRequest(
      `updateEmployee?employeeId=${employeeId}`,
      API_OPERATIONS.AdminOperations,
      {
        DisplayName: displayName,
        PhoneNumber: phoneNumber
      }
    );
  }
  deleteEmployee(employeeId: string) {
    return this.performDeleteRequest(
      `deleteEmployee?employeeId=${employeeId}`,
      API_OPERATIONS.AdminOperations
    );
  }
  getAllPerformanceReviews() {
    return this.performGetRequest(
      `getAllPerformanceReviews`,
      API_OPERATIONS.AdminOperations
    );
  }
  getSubmittedReviews(performanceReviewId: string) {
    return this.performGetRequest(
      `getSubmittedReviews?performanceReviewId=${performanceReviewId}`,
      API_OPERATIONS.AdminOperations
    );
  }
  login(userName: string, password: string) {
    return this.performGetRequest(
      `login?userName=${userName}&password=${password}`,
      API_OPERATIONS.AppOperations
    );
  }
  async performGetRequest(url: string, operation: string) {
    await this.verifyUserSession();
    const result = await this.http
      .get(environment.apiServer + operation + "/" + url)
      .toPromise();
    return result;
  }
  async performDeleteRequest(url: string, operation: string) {
    await this.verifyUserSession();
    const result = await this.http
      .delete(environment.apiServer + operation + "/" + url)
      .toPromise();
    return result;
  }
  async performPutRequest(url: string, operation: string, body) {
    await this.verifyUserSession();
    const result = await this.http
      .put(
        environment.apiServer + operation + "/" + url,
        body,
        this.httpOptions
      )
      .toPromise();
    return result;
  }
  async performPostRequest(url: string, operation: string, body) {
    await this.verifyUserSession();
    const result = await this.http
      .post(
        environment.apiServer + operation + "/" + url,
        body,
        this.httpOptions
      )
      .toPromise();
    return result;
  }
  async verifyUserSession() {}
}
