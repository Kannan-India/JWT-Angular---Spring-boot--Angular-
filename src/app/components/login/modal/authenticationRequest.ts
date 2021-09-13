export class AuthenticationRequest {
  private _email: String;
  private _password: String;

  get email(): String {
    return this._email;
  }

  set email(email: String) {
    this._email = email;
  }

  get password(): String {
    return this._password;
  }

  set password(password: String) {
    this._password = password;
  }
}
