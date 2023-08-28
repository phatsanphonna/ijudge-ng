import { Component } from '@angular/core';
import { LoadingService } from '../core/loading.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [],
})
export class HomeComponent {
  constructor(public readonly loading: LoadingService) {}

  readonly projectTitle = '<i>Judge';
}
