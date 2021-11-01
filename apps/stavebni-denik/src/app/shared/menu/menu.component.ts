import { MenuController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@capacitor/storage';

import { AuthAppService } from '../service/auth-app.service';
import { LoggedUserService } from '../service/logged-user.service';
import { from, map } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  projectId$ = from(Storage.get({ key: 'projectId' })).pipe(
    map((storage) => storage.value)
  );
  user$ = this.loggedUserService.loggedUser$();

  constructor(
    private authAppService: AuthAppService,
    private loggedUserService: LoggedUserService,
    private menu: MenuController,
    private router: Router
  ) {}

  ngOnInit() {}

  async onMenuSelect(path: string) {
    await this.menu.close();
    this.router.navigate([`app/${path}`]);
  }

  logout() {
    this.authAppService.logout();
  }
}
