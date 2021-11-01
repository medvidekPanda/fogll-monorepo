import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddDayEventComponent } from './module/add-day-event/add-day-event.component';
import { DayLogDetailComponent } from './module/day-log-detail/day-log-detail.component';
import { DayLogListComponent } from './module/day-log-list/day-log-list.component';

const routes: Routes = [
  {
    path: '',
    component: DayLogListComponent,
  },
  {
    path: 'event-add',
    component: AddDayEventComponent,
  },
  {
    path: 'event-detail',
    component: DayLogDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectManagementPageRoutingModule { }
