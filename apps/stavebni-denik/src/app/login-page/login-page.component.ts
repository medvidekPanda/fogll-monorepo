import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

import { AuthAppService } from '../shared/service/auth-app.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  loginForm = new FormGroup({});
  fields: FormlyFieldConfig[] = [
    {
      key: 'username',
      type: 'input',
      templateOptions: {
        label: 'Uživatelské jméno',
        required: true,
      },
    },
    {
      key: 'password',
      type: 'input',
      templateOptions: {
        type: 'password',
        label: 'Heslo',
        required: true,
      },
    },
  ];

  constructor(private authAppService: AuthAppService) {}

  login() {
    this.authAppService.loging(
      this.loginForm.value.username,
      this.loginForm.value.password
    );
  }

  logout() {
    this.authAppService.logout();
  }
}
