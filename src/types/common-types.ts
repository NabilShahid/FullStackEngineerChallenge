export type Employee={
    DisplayName:string,
    UserName:string,
    PhoneNumber:string,
    Password:string,
 }
 export type ClientSessionObject={
    EmployeeId:string,
    DisplayName:string,
    IsAdmin:boolean
}
export type UserPickerOptions={
    Mode:string,
    ExcludeUsers:Array<string>
}
export type EmployeeSearchResult={
    EmployeeId:string,
    UserName:string,
    DisplayName:string
}