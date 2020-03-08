import { Employee } from './../../types/common-types';
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
  createEmployee(employeeObject:Employee) {
    return this.performPostRequest(
      "createEmployee",
      API_OPERATIONS.AdminOperations,
      employeeObject
    );
  }
  async performGetRequest(url: string, operation: string) {
    await this.verifyUserSession();
    const result = await this.http
      .get(environment.apiServer + operation + "/" + url)
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
