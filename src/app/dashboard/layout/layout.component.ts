import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-layout',
  template: `
    <h1 class="title">Dashboard Layout</h1>
    <p>
      <a routerLink="home" >Home</a> |
      <a routerLink="admin"> Admin </a>
      <button class="button" (click)="logout()"> Logout</button>
    </p>
    <router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class LayoutComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
  }

}
