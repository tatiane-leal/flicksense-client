import { HttpInterceptorFn } from '@angular/common/http';
import { TokenStorageService } from '../services/token-storage.service';
import { inject } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenStorageService = inject(TokenStorageService);

  const authReq = req.clone({
    headers: req.headers.set(
      'Authorization',
      `Bearer ${tokenStorageService.getToken()}`
    ),
  });

  if(!req.url.startsWith('https://api.themoviedb.org')) {
    return next(authReq);
  } else {
    return next(req);
  }

 

  
};
