import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  readonly title = '<i>Judge'

  credentials = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  constructor(private readonly authService: AuthService, private readonly router: Router) { }

  submitForm() {
    if (this.credentials.valid) {
      this.authService.login({
        username: this.credentials.value.username!,
        password: this.credentials.value.password!
      }).add(() => {
        this.router.navigateByUrl('/')
      })
    } else {
      Object.values(this.credentials.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
