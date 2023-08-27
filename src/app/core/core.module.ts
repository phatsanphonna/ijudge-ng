import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { AuthService } from './auth.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LOCAL_STORAGE, getLocalStorage } from '../injectors/local-storage.injector';
import { LoadingHttpInterceptor } from './http.interceptor';

const nzModules = [
  NzIconModule,
  NzInputModule,
  NzButtonModule,
  NzCardModule,
  NzTypographyModule,
  NzFormModule,
  NzSpaceModule
]

@NgModule({
  providers: [
    { provide: LOCAL_STORAGE, useFactory: getLocalStorage },
  ],
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    nzModules
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    nzModules,
  ]
})
export class CoreModule { }
