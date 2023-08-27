import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { LoadingService } from '../core/loading.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [],
})
export class HomeComponent {
  constructor(
    private readonly authService: AuthService,
    public readonly loading: LoadingService,
  ) {}

  myInfo$ = this.authService.getMyInfo();
}
