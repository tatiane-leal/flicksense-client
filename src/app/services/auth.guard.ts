import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenStorageService } from './token-storage.service';

export const authGuard: CanActivateFn = (route, state) => {
  const token = inject(TokenStorageService).getToken();
  if (!!token) {
    return true;
  } else {
    const router = inject(Router);
    router.navigateByUrl('/login');
    return false;
  }
};
