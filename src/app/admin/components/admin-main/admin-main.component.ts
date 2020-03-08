/**
 * AdminPanelComponent
 * Renders view on admin panel main page containing side menu and a router outlet to render sub pages
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.css']
})
export class AdminMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
