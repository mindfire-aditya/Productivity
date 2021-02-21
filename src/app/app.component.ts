import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Productivity';

  loggedIn = false;
  username: string = '';

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {
    this.loginService.authorized.subscribe((isLoggedIn) => {
      this.loggedIn = isLoggedIn;
      if (isLoggedIn === true) {
        this.router.navigate(['/']);
      }
    });
  }
}
