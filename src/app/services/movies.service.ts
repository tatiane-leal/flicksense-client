import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { mergeMap, map, tap, switchMap } from 'rxjs/operators';
import { Movie, MovieApiResponse } from '../../models/movie.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = environment.tmdbApiKey;

  constructor(private http: HttpClient) {}

  getPopularMovies(): Observable<Movie[]> {
    const url = `${this.apiUrl}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}`;
    return this.http.get<MovieApiResponse>(url).pipe(
      map((response) => {
        return response.results;
      })
    );
  }

  getGenres(): Observable<{ id: number; name: string }[]> {
    const params = new HttpParams().set('api_key', environment.tmdbApiKey);
    return this.http
      .get<{ genres: { id: number; name: string }[] }>(
        `${this.apiUrl}/genre/movie/list`,
        { params }
      )
      .pipe(map((response) => response.genres));
  }

  discoverMovies(searchParams: {
    genreIds?: string[];
    year?: string;
  }): Observable<Movie[]> {
    let params = new HttpParams().set('api_key', environment.tmdbApiKey);

    if (searchParams.genreIds) {
      params = params.set('with_genres', searchParams.genreIds.join(','));
    }
    if (searchParams.year) {
      params = params.set('year', searchParams.year);
    }
    return this.http
      .get<MovieApiResponse>(`${this.apiUrl}/discover/movie`, { params })
      .pipe(map((response) => response.results));
  }
}
