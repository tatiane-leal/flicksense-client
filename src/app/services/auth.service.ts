import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { User } from '../../models/user.interface';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private _http: HttpClient,
    private _tokenStorageService: TokenStorageService
  ) {}

  get isAuthenticated(): boolean {
    return !!this._tokenStorageService.getToken();
  }

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

  logoutUser(): Observable<any> {
    const url = 'http://localhost:3000/logout';
    return this._http.post(url, {}, { withCredentials: true });
  }
}
