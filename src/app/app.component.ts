import { StorageService } from "./services/storage.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Feedback Management";
  constructor(private rtr: Router, private storageService: StorageService) {}
  ngOnInit() {
    this.navigateOnLoadBasedOnSession(this.storageService.user.IsAdmin);
  }
  navigateOnLoadBasedOnSession(isAdmin: boolean) {
    if (isAdmin === true) {
      this.rtr.navigate(["admin"]);
    } else if (isAdmin === false) {
      this.rtr.navigate(["user"]);
    } else {
      this.rtr.navigate(["login"]);
    }
  }
}
