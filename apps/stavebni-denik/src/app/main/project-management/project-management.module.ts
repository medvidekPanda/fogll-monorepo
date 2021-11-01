import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../../shared/shared.module';
import { AddDayEventComponent } from './module/add-day-event/add-day-event.component';
import { DayLogDetailComponent } from './module/day-log-detail/day-log-detail.component';
import { DayLogListItemComponent } from './module/day-log-list-item/day-log-list-item.component';
import { DayLogListComponent } from './module/day-log-list/day-log-list.component';
import { EventDetailComponent } from './module/event-detail/event-detail.component';
import { ProjectManagementPageRoutingModule } from './project-management-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ProjectManagementPageRoutingModule,
    SharedModule,
  ],
  declarations: [
    AddDayEventComponent,
    DayLogListComponent,
    DayLogListItemComponent,
    DayLogDetailComponent,
    EventDetailComponent,
  ]
})
export class ProjectManagementPageModule {}
