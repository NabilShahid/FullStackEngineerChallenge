import { ApiService } from './../../../services/api.service';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-admin-employees",
  templateUrl: "./admin-employees.component.html",
  styleUrls: ["./admin-employees.component.css"]
})
export class AdminEmployeesComponent implements OnInit {
  constructor(private apiService:ApiService) {}
  pageIndex = 1;
  pageSize = 10;
  total = 1;
  listOfData:Object;
  loading = true;
  sortValue: string | null = null;
  sortKey: string | null = null;
  filterGender = [
    { text: "male", value: "male" },
    { text: "female", value: "female" }
  ];
  searchGenderList: string[] = [];

 async getEmployeeData(reset: boolean = false): Promise<void> {
    if (reset) {
      this.pageIndex = 1;
    }
    this.loading = true;
    const getResult:any=await this.apiService
      .getEmployees(
        (this.pageIndex - 1) * this.pageSize,
        this.pageSize,
        this.sortKey!,
        this.sortValue === "descend" ? "desc" : "asc",
        this.searchGenderList
      );
      this.loading=false;
      this.total=getResult.Count;
      this.listOfData=getResult.EmployeeData;
  }
  sort(sort: { key: string; value: string }): void {
    this.sortKey = sort.key;
    this.sortValue = sort.value;
    this.getEmployeeData();
  }
  updateFilter(value: string[]): void {
    this.searchGenderList = value;
    this.getEmployeeData(true);
  }

  ngOnInit(): void {
    this.getEmployeeData();
  }
  visible = false;

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
}
