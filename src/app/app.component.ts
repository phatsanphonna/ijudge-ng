import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AuthService } from './core/auth.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  loginRoute = false;

  constructor(
    private readonly meta: Meta,
    private readonly title: Title,
    readonly route: ActivatedRoute,
    readonly router: Router,
    private readonly auth: AuthService,
    @Inject(PLATFORM_ID) private readonly platformId: Object,
  ) {
    this.title.setTitle('<i>Judge');
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.loginRoute = event.url === '/login';
        }
      });

      this.auth.getMyInfo()?.subscribe();
    }
  }
}
