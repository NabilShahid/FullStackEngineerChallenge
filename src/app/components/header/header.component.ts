import MESSAGES from "../../constants/messages";
import { Router } from "@angular/router";
import { StorageService } from "./../../services/storage.service";
import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent  {
  constructor(private storageService: StorageService, private rtr: Router) {}
  displayName: string;
 
  logout() {
    if (confirm(MESSAGES.ConfirmLogout)) {
      this.storageService.user = null;
      localStorage.clear();
      this.rtr.navigate(["login"]);
      this.displayName = "";
    }
  }
}
