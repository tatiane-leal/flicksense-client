import { HttpInterceptorFn } from '@angular/common/http';
import { TokenStorageService } from '../services/token-storage.service';
import { inject } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenStorageService = inject(TokenStorageService);

  if (req.url.startsWith('https://api.themoviedb.org')) {
    console.log('TMDB API Request', req);
    return next(req);
  }

  if (req.url.endsWith('/analysis')) {
    console.log('Analysis Request', req);
    return next(req);
  }

  if (req.url.startsWith('http://localhost:3000')) {
    console.log('Localhost Request with Auth', req);
    const authToken = tokenStorageService.getToken();
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    return next(authReq);
  }

  return next(req);
};
