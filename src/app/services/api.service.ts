import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Post } from '../../models/post.interface';
import { Movie, MoviePayload } from '../../models/movie.interface';
import { UserMovie } from '../../models/user.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private _http: HttpClient) {}

  getMessages(): Observable<Post[]> {
    const url = 'http://localhost:3000/posts';
    return this._http.get<Post[]>(url);
  }

  // TODO: Create user interface
  getUsers(): Observable<any> {
    const url = 'http://localhost:3000/users';
    return this._http.get(url);
  }

  saveMovies(payload: MoviePayload): Observable<any> {
    const url = `http://localhost:3000/users`;
    return this._http.put(url, payload);
  }

  getUserMovies(userId: string | undefined): Observable<Movie[]> {
    const url = `http://localhost:3000/users/${userId}`;
    return this._http
      .get<UserMovie>(url)
      .pipe(map((response: UserMovie) => response.movies));
  }

  getMovieReviewAnalysis(userReview: string) {
    const payload = {
      review: userReview,
    };
    const url = `http://localhost:3000/analysis`;
    return this._http.post(url, payload);
  }

  updateMovieSentiment(
    userId: string | undefined,
    movieId: number,
    sentiment_result: any
  ): Observable<Movie[]> {
    const url = `http://localhost:3000/users/${userId}/movies/${movieId}/sentiment`;

    return this._http
      .put<MoviePayload>(url, {
        sentiment_result,
      })
      .pipe(map((response) => response.user.movies));
  }
}
