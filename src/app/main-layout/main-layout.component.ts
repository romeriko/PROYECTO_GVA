import {Component, EventEmitter, Input} from '@angular/core';
import {Session} from '../models/session';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent {

  @Input()
  title = 'home';

  session: Session;
  loading = false;

  constructor(private userService: UserService,
              private router: Router) {
    this.session = JSON.parse(localStorage.getItem('session'));
    this.sidenavActions = new EventEmitter<any>();
    this.sidenavParams = [];

    this.menuItems = [
      {name: 'Dispositivos', route: '/devices'},
      {name: 'Instalaciones', route: '/installations'},
      {name: 'Logs', route: '/logs'}
    ];
  }

  app = {name: 'GVA Project', version: '1.0.0-BETA'};
  menuItems: MenuItem[];

  sidenavActions: EventEmitter<any>;
  sidenavParams: any[];

  close() {
    this.sidenavActions.emit({action: 'sideNav', params: ['hide']});
  }

  logout($event) {
    $event.preventDefault();
    this.loading = true;
    this.userService.logout().subscribe(() => {
      localStorage.clear();
      this.loading = false;
      this.router.navigate(['/login']);
    }, () => {
      this.loading = false;
    });
  }
}

export interface MenuItem {
  name: string;
  route: string;
}

