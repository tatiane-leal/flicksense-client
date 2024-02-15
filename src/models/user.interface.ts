import { JwtPayload } from 'jwt-decode';

export interface User {
  email: string;
  password: string;
}

export interface CurrentUser {
  asObservable(): import('rxjs').Observable<CurrentUser | null>;
  UserInfo: UserInfo;
  exp: number;
  iat: number;
}

export interface UserInfo {
  name: string;
  id: string;
  email: string;
  roles: string[];
}
