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
import { Movie } from '../../../models/movie.interface';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';
import { ActivatedRoute } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';


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
    MatToolbarModule
  ],
  providers: [MoviesService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  searchForm: FormGroup = new FormGroup({});
  movies$!: Observable<Movie[]>;
  genres$!: Observable<{ id: number; name: string }[]>;
  hasSearched: boolean = false;

  constructor(
    private fb: FormBuilder,
    private _moviesService: MoviesService,
    private _activatedRoute: ActivatedRoute
  ) {
    // this._moviesService.getPopularMovies().subscribe({
    //   next: (response) => {
    //     console.log(response);
    //     this.movies$ = of(response);
    //   },
    //   error: (error) => console.error(error),
    // });
    // this.genres$ = this._moviesService.getGenres();
  }

  ngOnInit() {
    // Get data from the resolver
    this._activatedRoute.data.subscribe({
      next: ({ moviesData }) => {
        // Atribuição direta do Observable
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

  addFavorite(movie: Movie) {
    console.log('Added to favorites:', movie);
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
