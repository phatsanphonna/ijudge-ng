import { Component } from '@angular/core';

@Component({
  selector: 'core-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent {
  menuVisible = true;

  toggleMenu(visible: boolean) {
    this.menuVisible = visible;
  }
}
