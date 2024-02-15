import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MoviesService } from '../../services/movies.service';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { Movie, MoviePayload } from '../../../models/movie.interface';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';
import { ActivatedRoute, Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';
import { CurrentUser } from '../../../models/user.interface';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    MatTooltipModule,
    MatChipsModule,
    MatToolbarModule,
  ],
  providers: [MoviesService, ApiService, AuthService, TokenStorageService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  searchForm: FormGroup = new FormGroup({});
  movies$!: Observable<Movie[]>;
  genres$!: Observable<{ id: number; name: string }[]>;
  hasSearched: boolean = false;
  currentUser!: CurrentUser | null;

  private _selectedMovies: Movie[] = [];

  constructor(
    private fb: FormBuilder,
    private _moviesService: MoviesService,
    private _activatedRoute: ActivatedRoute,
    private _apiService: ApiService,
    private _tokenStorageService: TokenStorageService,
    private _router: Router,
    private _authService: AuthService
  ) {}

  ngOnInit() {
    this._authService.currentUser.subscribe((currentUser) => {
      this.currentUser = currentUser;
    });

    // Get data from the resolver
    this._activatedRoute.data.subscribe({
      next: ({ moviesData }) => {
        this.movies$ = of(moviesData.popularMovies);
        this.genres$ = of(moviesData.genres);
      },
      error: (error) => console.error(error),
    });

    this.searchForm = this.fb.group({
      title: [''],
      genre: [''],
      year: [''],
    });

    this.searchForm.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(
          (prev, curr) => JSON.stringify(prev) === JSON.stringify(curr)
        )
      )
      .subscribe((formValues) => {
        const { title, genre, year } = formValues;

        if (!title && !genre && !year) {
          this.clearSearch();
          return;
        }

        this.hasSearched = true;

        if (title) {
          this.movies$ = this.movies$.pipe(
            map((movies) =>
              movies.filter((movie) =>
                movie.title.toLowerCase().includes(title.toLowerCase())
              )
            )
          );
        } else {
          let searchParams: any = {};
          if (genre)
            searchParams.genreIds = Array.isArray(genre) ? genre : [genre];
          if (year) searchParams.year = year;

          this.movies$ = this._moviesService.discoverMovies(searchParams);
        }
      });
  }

  onSearch(): void {
    this.hasSearched = true;
    const { title, genre, year } = this.searchForm.value;

    let searchParams: any = {};

    if (title) {
      searchParams.title = title;
    }

    if (genre) {
      searchParams.genreIds = Array.isArray(genre) ? genre : [genre];
    }

    if (year) {
      searchParams.year = year;
    }

    this.movies$ = this._moviesService.discoverMovies(searchParams);
  }

  clearSearch(): void {
    this.searchForm.reset();
    this.hasSearched = false;
    this.movies$ = this._moviesService.getPopularMovies();
  }

  selectMovies(movie: Movie): void {
    if (!this._selectedMovies.find((m) => m.title === movie.title)) {
      this._selectedMovies.push(movie);

      console.log('movies selected', this._selectedMovies);
    }
  }

  isMovieSelected(movie: Movie): boolean {
    return !!this._selectedMovies.find((m) => m.title === movie.title);
  }

  saveMovies(): void {
    const payload: MoviePayload = {
      id: this.currentUser?.UserInfo?.id,
      movies: this._selectedMovies,
    };

    this._apiService.saveMovies(payload).subscribe({
      next: (response) => {
        console.log('save movie response', response);
        this._router.navigate(['/profile', this.currentUser?.UserInfo?.id]);
      },
      error: (error) => console.error(error),
    });
  }

  fallbackImage(event: any, movie: any): void {
    const backdropUrl = movie.backdrop_path
      ? 'https://image.tmdb.org/t/p/w500' + movie.backdrop_path
      : null;
    if (backdropUrl) {
      event.target.src = backdropUrl;
    } else {
      event.target.src =
        'https://fastly.picsum.photos/id/299/160/250.jpg?hmac=aODh_nRRY3uV6gUfmbkzbuovqDnsinL1tA9b5fs0JKA';
    }
  }

  shouldShowEllipsis(movieTitle: string) {
    return movieTitle.length > 16;
  }
}
