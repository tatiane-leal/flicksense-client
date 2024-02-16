import { Movie } from './movie.interface';

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

interface Roles {
  User: number;
  Admin: number;
  Editor: number;
}

export interface UserMovie {
  email: string;
  movies: Movie[];
  name: string;
  password: string; // TODO: Exclude this field from server response
  refreshToken: string;
  roles: Roles;
  __v: number;
  _id: string;
}
