import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  constructor(private authService: AuthService) { }

  login() {
    this.authService.login();
  }

  loginAdmin() {
    this.authService.loginAdmin();
  }

}
