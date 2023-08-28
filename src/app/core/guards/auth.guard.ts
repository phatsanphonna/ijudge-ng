import { PLATFORM_ID, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { NzMessageService } from 'ng-zorro-antd/message'

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const platformId = inject(PLATFORM_ID);
  const message = inject(NzMessageService)
  const router = inject(Router)

  let canContinue: boolean = false;

  if (isPlatformBrowser(platformId)) {
    canContinue = !!authService.getToken()

    if (!canContinue) {
      message.warning('You are not authorized to do this action!');
      router.navigate(['/login']);
    }
  }

  return canContinue;
};
