import { Injectable, Output, EventEmitter } from '@angular/core'
import { map } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http'
import { Users} from './user'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  redirectUrl: string;
  baseUrl: string = 'http://localhost/pro/php';
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private httpClient: HttpClient) {}
  public userlogin(username, password) {
    alert(username);
    return this.httpClient
      .post<any>(this.baseUrl + '/login.php', { username, password })
      .pipe(
        map((Users) => {
          this.setToken(Users[0].name);
          this.getLoggedInName.emit(true);
          return Users;
        })
      );
  }

  public userregistration(name, email, pwd) {
    return this.httpClient
      .post<any>(this.baseUrl + '/register.php', { name, email, pwd })
      .pipe(
        map((Users) => {
          return Users;
        })
      );
  }

  public data(first_name, last_name, email, address) {
    return this.httpClient
      .post<any>(this.baseUrl + '/data.php', {
        first_name,
        last_name,
        email,
        address,
      })
      .pipe(
        map((Data) => {
          return Data;
        })
      );
  }

  //token
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  deleteToken() {
    localStorage.removeItem('token');
  }
  isLoggedIn() {
    const usertoken = this.getToken();
    if (usertoken != null) {
      return true;
    }
    return false;
  }
}
