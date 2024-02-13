import { HttpInterceptorFn } from '@angular/common/http';
import { TokenStorageService } from '../services/token-storage.service';
import { inject } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenStorageService = inject(TokenStorageService);
  console.log('authInterceptor token?', tokenStorageService.getToken());

  const authReq = req.clone({
    headers: req.headers.set(
      'Authorization',
      `Bearer ${tokenStorageService.getToken()}`
    ),
  });

  return next(authReq);
};
