import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserMainComponent } from './components/user-main/user-main.component';
import { RouterModule } from '@angular/router';
import { SubmitFeebackComponent } from './components/submit-feeback/submit-feeback.component';



@NgModule({
  declarations: [UserMainComponent, SubmitFeebackComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: "",
        component: UserMainComponent,
        children: [
          // {
          //   path: "home",
          //   component: AdminHomeComponent
          // },
          // {
          //   path: "employees",
          //   component: AdminEmployeesComponent
          // },
          // {
          //   path: "performance-reviews",
          //   component: AdminPerformanceReviewsComponent
          // }
        ]
      }
    ])
  ]
})
export class UserModule { }
