import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import th from '@angular/common/locales/th';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N, en_US, th_TH } from 'ng-zorro-antd/i18n';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { CourseModule } from './course/course.module';
import { HomeComponent } from './home/home.component';
import { LoadingHttpInterceptor } from './core/http.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

registerLocaleData(en);
registerLocaleData(th);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    CourseModule,
    AuthModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: NZ_I18N, useValue: th_TH },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingHttpInterceptor,
      multi: true
    },
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
