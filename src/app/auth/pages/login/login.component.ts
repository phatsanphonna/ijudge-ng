import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  readonly title = '<i>Judge'

  credentials = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  submitForm() {
    console.log(this.credentials.value)
  }
}
