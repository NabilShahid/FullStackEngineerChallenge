import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzCheckboxModule } from "ng-zorro-antd/checkbox";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzMenuModule } from "ng-zorro-antd/menu";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzGridModule } from "ng-zorro-antd/grid";
import { NzSelectModule } from "ng-zorro-antd/select";
import { NzTableModule } from "ng-zorro-antd/table";
import { NzMessageModule } from "ng-zorro-antd/message";
import { NzListModule } from "ng-zorro-antd/list";
import { NzPaginationModule } from "ng-zorro-antd/pagination";
import { NzToolTipModule } from "ng-zorro-antd/tooltip";
import { NzRateModule } from "ng-zorro-antd/rate";
import { ReviewsListComponent } from "./components/reviews-list/reviews-list.component";
import { NzDrawerModule } from "ng-zorro-antd/drawer";
import { FormsModule } from "@angular/forms";
import { UserPickerComponent } from "./components/user-picker/user-picker.component";
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { FormatDatePipe } from './pipes/format-date.pipe';

@NgModule({
  declarations: [ReviewsListComponent, UserPickerComponent, FormatDatePipe],
  imports: [
    CommonModule,
    FormsModule,
    NzInputModule,
    NzCheckboxModule,
    NzButtonModule,
    NzFormModule,
    NzMenuModule,
    NzIconModule,
    NzGridModule,
    NzSelectModule,
    NzTableModule,
    NzMessageModule,
    NzListModule,
    NzPaginationModule,
    NzRateModule,
    NzToolTipModule,
    NzSpinModule,
    NzDrawerModule
  ],
  exports: [
    FormsModule,
    NzInputModule,
    NzCheckboxModule,
    NzButtonModule,
    NzFormModule,
    NzSpinModule,
    NzMenuModule,
    NzIconModule,
    NzGridModule,
    NzSelectModule,
    NzTableModule,
    NzMessageModule,
    NzListModule,
    NzPaginationModule,
    NzToolTipModule,
    NzRateModule,
    ReviewsListComponent,
    UserPickerComponent,
    NzDrawerModule
  ]
})
export class SharedModule {}
// Tasks
// 1. Submit feedback on assigned reviews
// 2. View assigned reviews
// 3. View Feebacks of one review
// 4. Update Employee
// 5. Update assignees
// 6. Header info
// 7. Routing fix