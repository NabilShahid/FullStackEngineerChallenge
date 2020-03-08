import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzCheckboxModule } from "ng-zorro-antd/checkbox";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzMenuModule } from "ng-zorro-antd/menu";
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzInputModule,
    NzCheckboxModule,
    NzButtonModule,
    NzFormModule,
    NzMenuModule,
    NzIconModule,
    NzGridModule
  ],
  exports: [
    NzInputModule,
    NzCheckboxModule,
    NzButtonModule,
    NzFormModule,
    NzMenuModule,
    NzIconModule,
    NzGridModule
  ]
})
export class SharedModule {}
