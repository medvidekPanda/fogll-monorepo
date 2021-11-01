import { Injectable } from '@angular/core';
import { filter, map, switchMap } from 'rxjs/operators';

import { QueryResponse } from '../model/query.model';
import { UserInfo } from '../model/user.model';
import { AuthAppService } from './auth-app.service';
import { DatabaseBaseService } from './database-base.service';
import { DatabaseConfig } from './database-config.service';

@Injectable({
  providedIn: 'root',
})
export class LoggedUserService extends DatabaseBaseService {
  constructor(
    private authAppService: AuthAppService,
    protected db: DatabaseConfig
  ) {
    super(db);
  }

  loggedUser$() {
    return this.authAppService.loggedUserEmail$().pipe(
      switchMap((email) => {
        const dbQuery = {
          view: 'day-events/userList',
          options: { key: `user:${email}` },
        };
        return this.getItems$(dbQuery).pipe(
          filter(Boolean),
          map((result: QueryResponse<UserInfo>) => {
            return result.rows[0];
          })
        );
      })
    );
  }
}
