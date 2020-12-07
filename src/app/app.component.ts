import { AuthService } from './Services/auth/auth.service';
import { Component } from '@angular/core';
import { AuthenticatService } from './Services/auth/authenticat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    public auth: AuthService,
    private authenticat: AuthenticatService,
    private router: Router
  ) {
    auth.handleAuthentication();
  }

  onLogout() {
    this.authenticat.logout();
    this.router.navigate(['/auth/login']);
  }
}
