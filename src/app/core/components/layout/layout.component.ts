import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'core-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent implements OnInit {
  togglePadding = false;
  menuVisible = true;

  constructor(
    private readonly router: Router,
    @Inject(PLATFORM_ID) private readonly platformId: Object
  ) { }

  ngOnInit() {

  }

  toggleMenu(visible: boolean) {
    this.menuVisible = visible;
  }
}

