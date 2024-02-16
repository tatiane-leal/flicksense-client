import { ResolveFn } from '@angular/router';
import { forkJoin } from 'rxjs';
import { MoviesService } from './movies.service'; // Substitua pelo caminho correto para o seu serviço
import { inject } from '@angular/core';

export const moviesResolver: ResolveFn<any> = (route, state) => {
  const moviesService = inject(MoviesService);

  return forkJoin({
    popularMovies: moviesService.getPopularMovies(),
    genres: moviesService.getGenres(),
  });
};
