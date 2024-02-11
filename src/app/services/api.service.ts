import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Post } from '../../models/post.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private _http: HttpClient) {}

  getMessages(): Observable<Post[]> {
    const url = '  http://localhost:3000/posts';
    return this._http.get<Post[]>(url);
  }

  // TODO: Create user interface
  getUsers(): Observable<any> {
    const url = '  http://localhost:3000/users';
    return this._http.get<any>(url);
  }
}