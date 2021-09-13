import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthenticationRequest } from './modal/authenticationRequest';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  authenticationRequest: AuthenticationRequest;
  response: String;

  constructor(private http: HttpClient) {
    this.authenticationRequest = new AuthenticationRequest();
  }

  ngOnInit(): void {}

  onLoginRequest() {
    this.http
      .post('http://localhost:8080/api/auth', this.authenticationRequest)
      .toPromise()
      .then((data) => {
        this.response = data['response'];
      });
  }
}
