import { AdminEmployeesComponent } from './components/admin-employees/admin-employees.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminMainComponent } from './components/admin-main/admin-main.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AdminMainComponent,AdminHomeComponent,AdminEmployeesComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdminMainComponent,
        children:[
          {
            path: 'home',
            component: AdminHomeComponent
          },
          {
            path: 'employees',
            component: AdminEmployeesComponent
          },
        ]
      }
     
    ])
  ]
})
export class AdminModule { }
