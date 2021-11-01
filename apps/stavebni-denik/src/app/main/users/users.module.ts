import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../shared/shared.module';
import { AddEditUserComponent } from './add-edit-user/add-edit-user.component';
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import { UserListComponent } from './user-list/user-list.component';
import { UsersPageRoutingModule } from './users-routing.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsersPageRoutingModule,
    SharedModule,
  ],
  declarations: [
    AddEditUserComponent,
    UserListComponent,
    UserListItemComponent,
  ]
})
export class UsersPageModule {}
