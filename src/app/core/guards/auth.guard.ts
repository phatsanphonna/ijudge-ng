import { PLATFORM_ID, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { isPlatformBrowser } from '@angular/common';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const platform = inject(PLATFORM_ID);
  const router = inject(Router);

  const result = isPlatformBrowser(platform) && authService.getToken() !== null;

  if (!result) {
    router.navigateByUrl('/login');
  }

  return result;
};
