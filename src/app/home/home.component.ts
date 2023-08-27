import { Component } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(
    private readonly authService: AuthService,
  ) { }

  myInfo$ = this.authService.getMyInfo()
}
