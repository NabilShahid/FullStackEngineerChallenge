import { environment } from "./../../../../environments/environment";
import {
  UserPickerOptions,
  EmployeeSearchResult
} from "./../../../../types/common-types";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { map, switchMap, debounceTime, filter } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import API_OPERATIONS from "src/app/constants/api-operactions";

@Component({
  selector: "app-user-picker",
  templateUrl: "./user-picker.component.html",
  styleUrls: ["./user-picker.component.css"]
})
export class UserPickerComponent implements OnInit {
  @Input() options: UserPickerOptions;
  getUrl = searchString =>
    environment.apiServer +
    API_OPERATIONS.UserOperations +
    "/searchEmployees?searchString=" +
    searchString;
  searchChange$ = new Subject<Object>();
  @Input("defaultValue") set defaultModelSetter(value:Array<EmployeeSearchResult>){
    if(Array.isArray(value)){
      this.optionList=value;
      this.selectedUser=value.map(v=>v.EmployeeId);
    }
    this.optionList=value;
  }
  optionList: Array<EmployeeSearchResult> = [];
  selectedUser: string|Array<string>;
  isLoading = false;
  @Output() selectedUserEmitter = new EventEmitter();

  onSearch(value: string): void {
    this.isLoading = true;
    this.searchChange$.next(value);
  }

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // tslint:disable:no-any
    const getUsersList = (name: string) =>
      this.http.get(`${this.getUrl(name)}`).pipe(
        map((arr: Array<EmployeeSearchResult>) => {
          return arr.filter(
            r => !this.options.ExcludeUsers.includes(r.EmployeeId)
          );
        })
      );
    const optionList$: Observable<Object> = this.searchChange$
      .asObservable()
      .pipe(debounceTime(500))
      .pipe(switchMap(getUsersList));
    optionList$.subscribe((data: any) => {
      this.optionList = data;
      this.isLoading = false;
    });
  }
}
