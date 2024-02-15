import { Injectable } from '@angular/core';
import { CurrentUser } from '../../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  private readonly TOKEN_KEY = 'accessToken';
  private readonly CURRENT_USER_KEY = 'currentUser';

  constructor() {}

  public saveToken(token: string): void {
    sessionStorage.setItem(this.TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return sessionStorage.getItem(this.TOKEN_KEY);
  }

  public saveDecodedToken(currentUser: CurrentUser): void {
    sessionStorage.setItem(this.CURRENT_USER_KEY, JSON.stringify(currentUser));
  }

  public getDecodedToken(): CurrentUser | null {
    const currentUser = sessionStorage.getItem(this.CURRENT_USER_KEY);
    return currentUser ? JSON.parse(currentUser) : null;
  }

  public clearToken(): void {
    sessionStorage.removeItem(this.TOKEN_KEY);
    sessionStorage.removeItem(this.CURRENT_USER_KEY);
  }
}
