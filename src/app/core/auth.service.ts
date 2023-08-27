import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

interface ICredential {
  username: string
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly http: HttpClient) { }

  private setToken(token: string) {
    localStorage.setItem('token', token)
  }

  login(credential: ICredential) {
    console.log(credential)

    return this.http
      .put<{ message: string, token: string }>('/api/auth/login', credential)
      .pipe(map(({ token }) => token))
      .subscribe(token => {
        this.setToken(token)
      })
  }
}
