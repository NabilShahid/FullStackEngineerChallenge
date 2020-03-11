import { ClientSessionObject, Employee } from "./../../types/common-types";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class StorageService {
  constructor() {
    this.loadUser();
  }
  private _user: ClientSessionObject;
  loadUser() {
    this._user = JSON.parse(localStorage.getItem("User")||'{}');
  }
  get user(): ClientSessionObject {
    return this._user;
  }
  set user(value: ClientSessionObject) {
    this._user = value;
    localStorage.setItem("User", JSON.stringify(value));
  }
  
}
