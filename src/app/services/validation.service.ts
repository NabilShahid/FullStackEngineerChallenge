import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ValidationService {
  verifyPasswordLength = (password, minLength, maxLength) =>
    password.length >= minLength && password.length <= maxLength;

  verifyLowercaseCharacter = (input: string) => /[a-z]/.test(input);

  verifyUppercaseCharacter = (input: string) => /[A-Z]/.test(input);

  verifyNumericCharacter = (input: string) => /[0-9]/.test(input);

  verifySpecialCharacter = (input: string) =>
    /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(input);

  verifyPassword(password: string): boolean {
    if (
      !this.verifyPasswordLength(
        password,
        PASSWORD_POLICY.MinLength,
        PASSWORD_POLICY.MaxLength
      )
    )
      return false;

    if (!this.verifyLowercaseCharacter(password)) return false;

    if (!this.verifyUppercaseCharacter(password)) return false;

    if (!this.verifyNumericCharacter(password)) return false;

    if (!this.verifySpecialCharacter(password)) return false;

    return true;
  }
}
