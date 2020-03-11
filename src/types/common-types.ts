export type Employee = {
  DisplayName: string;
  UserName: string;
  PhoneNumber: string;
  Password: string;
  EmployeeId?:string,
};
export type ClientSessionObject = {
  EmployeeId: string;
  DisplayName: string;
  IsAdmin: boolean;
};
export type UserPickerOptions = {
  Mode: string;
  ExcludeUsers: Array<string>;
};
export type EmployeeSearchResult = {
  EmployeeId: string;
  UserName: string;
  DisplayName: string;
};
export type PerformanceReview = {
  EmployeeId: string;
  DisplayName: string;
  AvgRating: number;
  AssigneesCount: number;
  Feedbacks: number;
  DateAssigned:string
};

export type ReviewMeta={
  EmployeeId:string,
  PerformanceReviewId:string
}
