import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { QueryResponse } from 'src/app/shared/model/query.model';

import { UserInfo } from '../../../shared/model/user.model';
import { AddEditUserComponent } from '../add-edit-user/add-edit-user.component';
import { UsersListService } from '../service/users-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  private reload$ = new BehaviorSubject<void>(undefined);

  // try make it simplier
  users$ = this.reload$.pipe(
    switchMap(() => {
      const dbQuery = {
        view: 'day-events/userList',
      };

      return this.usersListService.getItems$(dbQuery).pipe(
        filter(Boolean),
        map((result: QueryResponse<UserInfo>) => {
          return result.rows.map(item => {
            return {
              _id: item.value._id,
              _rev: item.value._rev,
              email: item.value.email,
              firstName: item.value.firstName,
              lastName: item.value.lastName,
              projects: item.value.projects,
              type: item.value.type,
            };
          });
        }),
      );
    }),
  );

  constructor(
    private usersListService: UsersListService,
    public modalController: ModalController,
  ) { }

  ngOnInit() { }

  async addEditUser(userValue?: UserInfo) {
    const modal = await this.modalController.create({
      component: AddEditUserComponent,
      componentProps: {
        userValue,
      }
    });

    modal.onDidDismiss().then((d: any) => {
      // add check if data was changed before trigger reload
      this.reload$.next();
    });

    return await modal.present();
  }

}
