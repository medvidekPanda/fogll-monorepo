import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../shared/shared.module';
import { AtendenceListItemComponent } from './atendence-list-item/atendence-list-item.component';
import { AtendenceListComponent } from './atendence-list/atendence-list.component';
import { AtendencePageRoutingModule } from './atendence-routing.module';

@NgModule({
  imports: [
    AtendencePageRoutingModule,
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
  ],
  declarations: [AtendenceListComponent, AtendenceListItemComponent]
})
export class AtendencePageModule {}
