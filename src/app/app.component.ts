import {Component} from '@angular/core';
import {UserService} from './services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private userService: UserService,
              private router: Router) {
    this.userService.valid().subscribe(() => {
    }, () => this.router.navigate(['/login']));
  }
}
