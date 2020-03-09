import { AdminPerformanceReviewsComponent } from "./components/admin-performance-reviews/admin-performance-reviews.component";
import { AdminEmployeesComponent } from "./components/admin-employees/admin-employees.component";
import { AdminHomeComponent } from "./components/admin-home/admin-home.component";
import { SharedModule } from "./../shared/shared.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminMainComponent } from "./components/admin-main/admin-main.component";
import { RouterModule } from "@angular/router";
import { CreateEmployeeComponent } from "./components/create-employee/create-employee.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AdminMainComponent,
    AdminHomeComponent,
    AdminEmployeesComponent,
    CreateEmployeeComponent,
    AdminPerformanceReviewsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: "",
        component: AdminMainComponent,
        children: [
          {
            path: "home",
            component: AdminHomeComponent
          },
          {
            path: "employees",
            component: AdminEmployeesComponent
          },
          {
            path: "performance-reviews",
            component: AdminPerformanceReviewsComponent
          }
        ]
      }
    ])
  ]
})
export class AdminModule {}
