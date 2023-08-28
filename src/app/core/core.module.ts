import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IconDefinition } from '@ant-design/icons-angular';
import {
  BellOutline,
  DownOutline,
  LoginOutline,
  LogoutOutline,
  MenuOutline,
} from '@ant-design/icons-angular/icons';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import {
  LOCAL_STORAGE,
  getLocalStorage,
} from '../injectors/local-storage.injector';
import { LayoutComponent } from './components/layout/layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

const icons: IconDefinition[] = [
  LoginOutline,
  LogoutOutline,
  BellOutline,
  DownOutline,
  MenuOutline,
];

const nzModules = [
  NzIconModule.forRoot(icons),
  NzInputModule,
  NzButtonModule,
  NzCardModule,
  NzTypographyModule,
  NzFormModule,
  NzSpaceModule,
  NzLayoutModule,
  NzMessageModule,
  NzGridModule
];

@NgModule({
  providers: [{ provide: LOCAL_STORAGE, useFactory: getLocalStorage }],
  declarations: [NavbarComponent, LayoutComponent, SidebarComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    nzModules,
    RouterModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    nzModules,
    NavbarComponent,
    LayoutComponent,
  ],
})
export class CoreModule { }
