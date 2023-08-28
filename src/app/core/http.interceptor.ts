import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpResponse } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { HttpEvent } from '@angular/common/http';
import { finalize, tap } from 'rxjs/operators';
import { LoadingService } from './loading.service';

@Injectable()
export class LoadingHttpInterceptor implements HttpInterceptor {
  private totalRequests = 0;

  constructor(
    private loadingService: LoadingService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    this.totalRequests++;
    this.loadingService.show();

    return next.handle(request).pipe(
      finalize(() => {
        this.totalRequests--;
        if (this.totalRequests == 0) {
          this.loadingService.hide();
        }
      })
    );
  }
}
