export class UserProfile {
  private id: String = null;
  private _email: String;
  private _userName: String;
  private _password: String;
  private _role: String;

  get email(): String {
    return this._email;
  }

  set email(email: String) {
    this._email = email;
  }

  get userName(): String {
    return this._userName;
  }

  set userName(userName: String) {
    this._userName = userName;
  }

  get password(): String {
    return this._password;
  }

  set password(password: String) {
    this._password = password;
  }

  get role(): String {
    return this._role;
  }

  set role(role: String) {
    this._role = role;
  }
}
