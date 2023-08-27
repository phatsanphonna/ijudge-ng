import { PLATFORM_ID, inject } from "@angular/core";
import { CanActivateFn } from "@angular/router";
import { AuthService } from "../auth.service";
import { isPlatformBrowser } from "@angular/common";

export const authGuard: CanActivateFn = () => {
    const authService = inject(AuthService)
    const platform = inject(PLATFORM_ID)

    if (isPlatformBrowser(platform) && authService.getToken()) {
        return true;
    } else {
        return false
    }
}