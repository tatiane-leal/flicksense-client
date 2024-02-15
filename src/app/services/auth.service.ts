import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, of, tap } from 'rxjs';
import { CurrentUser, User } from '../../models/user.interface';
import { TokenStorageService } from './token-storage.service';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private _http: HttpClient,
    private _tokenStorageService: TokenStorageService
  ) {}

  get currentUser(): Observable<CurrentUser | null> {
    return of(this._tokenStorageService.getDecodedToken());
  }

  get isAuthenticated(): boolean {
    return !!this._tokenStorageService.getToken();
  }

  registerUser(userData: User): Observable<any> {
    console.log('registerUser service payload received', userData);
    const url = 'http://localhost:3000/register';
    return this._http.post(url, userData);
  }

  loginUser(credentials: User): Observable<any> {
    const url = 'http://localhost:3000/login';
    return this._http.post(url, credentials).pipe(
      tap((response: any) => {
        const decodedToken = jwtDecode(response.accessToken) as CurrentUser;
        console.log(decodedToken);
        this._tokenStorageService.saveDecodedToken(decodedToken);
        this._tokenStorageService.saveToken(response.accessToken);
      }),
      map((response) => {
        return response;
      })
    );
  }

  logoutUser(): Observable<any> {
    this._tokenStorageService.clearToken();

    const url = 'http://localhost:3000/logout';
    return this._http.post(url, {}, { withCredentials: true });
  }
}
