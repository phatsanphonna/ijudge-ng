import { PLATFORM_ID, inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../auth.service';
import { isPlatformBrowser } from '@angular/common';

export const loginGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const platform = inject(PLATFORM_ID);

  return !(isPlatformBrowser(platform) && authService.getToken() !== null);
};
