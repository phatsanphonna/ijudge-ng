import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../auth.service';
import { LoadingService } from '../../loading.service';
import { Router } from '@angular/router';

@Component({
  selector: 'core-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  constructor(
    public readonly auth: AuthService,
    public readonly loadingService: LoadingService,
    private readonly router: Router,
  ) {}

  menuVisible = true;
  @Output() visibleMenu = new EventEmitter();

  handleLogout() {
    this.auth.logout().subscribe(() => {
      this.router.navigateByUrl('/login');
    });
  }

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
    this.visibleMenu.emit(this.menuVisible);
  }
}
