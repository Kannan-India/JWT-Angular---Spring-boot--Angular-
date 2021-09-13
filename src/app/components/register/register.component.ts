import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserProfile } from './modal/userProfile';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  userProfile: UserProfile;
  response: String;

  constructor(private http: HttpClient) {
    this.userProfile = new UserProfile();
  }

  ngOnInit(): void {}

  onRegisterRequest() {
    this.http
      .post('http://localhost:8080/api/register', this.userProfile)
      .toPromise()
      .then((data) => {
        this.response = data['response'];
      });
  }
}
