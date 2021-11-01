import { LoggedUserService } from './logged-user.service';
import { Injectable } from '@angular/core';

import { DatabaseBaseService } from './database-base.service';

@Injectable({
  providedIn: 'root',
})

export class UserService extends DatabaseBaseService {}
