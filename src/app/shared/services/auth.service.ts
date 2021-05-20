import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl = "http://localhost:8081/api/users"
  // CHECK. Need to add the correct URL

  constructor(private http: HttpClient) { }

  // get user/email

  login(model: any) {
    return this.http.get(`${this.authUrl}/${model}`).pipe(
      map((response: any) => {
        const user = response;
        if (user.result.succeeded) {
          localStorage.setItem('token', user.token);
        }
      })
    )
  }

  getByEmailId(emailId: any) {
    console.log(emailId)

    return this.http.get(`${this.authUrl}/${emailId}`);
  }


}
