import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {Users} from "./interfaces";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class AuthService {


  constructor(private http: HttpClient, private router: Router) { }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    if (confirm('Are you sure?')) {
    localStorage.removeItem('token');
    }
    return this.router.navigate(['login']);
  }

  loginUser(users: Users): Observable<any> {
    return this.http.post(environment.apiURL + '/login', users);
  }

  regUser(usersReg: Users): Observable<any> {
    return this.http.post(environment.apiURL + '/reg', usersReg);
  }
}
