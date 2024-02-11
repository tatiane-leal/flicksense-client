import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { User } from '../../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpClient) {}

  registerUser(userData: User): Observable<any> {
    console.log('registerUser service payload received', userData);
    const url = 'http://localhost:3000/register';
    return this._http.post(url, userData);
  }

  loginUser(credentials: User): Observable<any> {
    console.log('login service credentials received', credentials);
    const url = 'http://localhost:3000/login';
    return this._http.post(url, credentials);
  }
}
