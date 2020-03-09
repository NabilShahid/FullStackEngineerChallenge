import { StorageService } from "./../../services/storage.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor(private storageService: StorageService) {}
  displayName: string;
  ngOnInit() {
    this.displayName = this.storageService.user.DisplayName;
  }
}
