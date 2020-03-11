enum MESSAGES {
  InvalidForm = "Form has validation errors",
  CreateEmployeeSuccess = "Employee added successfully",
  DuplicationEmployeeUserName = "User name already exists. Please enter a new user name",
  InvalidCredentials = "Invalid user name or password",
  CreateReviewSuccess="Performance review created successfully",
  FeedbackSubmitSuccess="Feedback submitted successfully",
  AssigneeRequired="Please enter atleast one assignee",
  ConfirmDeleteEmployee="This will also delete the reviews of this employee. Are you sure you want to delete this employee?",
  ConfirmLogout="Are you sure you want to logout?"
}
export default MESSAGES;
