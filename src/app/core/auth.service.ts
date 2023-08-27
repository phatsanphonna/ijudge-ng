import { isPlatformServer } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { map, tap } from 'rxjs';
import { LOCAL_STORAGE, LocalStorage } from '../injectors/local-storage.injector';

interface ICredential {
  username: string
  password: string
}

export interface IGetMyInfo {
  users: User[]
  has_permission: any[]
  enroll_course: any[]
}

export interface User {
  user_id: number
  username: string
  user_status: string
  is_active: number
  role_name: string
  created_at: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private readonly http: HttpClient,
    @Inject(LOCAL_STORAGE) private readonly localStorage: LocalStorage,
    @Inject(PLATFORM_ID) private readonly platform: Object
  ) { }

  private setToken(token: string) {
    this.localStorage.setItem('token', token)
  }

  private removeToken() {
    this.localStorage.removeItem('token')
  }

  getToken() {
    return this.localStorage.getItem('token')
  }

  login(credential: ICredential) {
    return this.http
      .put<{ message: string, token: string }>('/api/auth/login', credential)
      .pipe(map(({ token }) => token))
      .subscribe(token => {
        this.setToken(token)
      })
  }

  logout() {
    return this.http.put<string>('/api/auth/logout', {})
      .subscribe()
      .add(() => {
        this.removeToken()
      })
  }

  getMyInfo() {
    if (isPlatformServer(this.platform)) return

    return this.http.get<{ data: IGetMyInfo }>('/api/auth/me', {
      headers: {
        'Authorization': `Bearer ${this.getToken()}`
      }
    })
      .pipe(
        map(({ data: { users, enroll_course, has_permission } }) => {
          return {
            user: users[0],
            enroll_course,
            has_permission
          }
        }),
      )
  }
}
