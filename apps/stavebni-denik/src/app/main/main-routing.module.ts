import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppProjectsResolver } from '../shared/service/app-project-resolver';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage,
    resolve: { projects: AppProjectsResolver },
    children: [
      {
        path: 'project-management/:id',
        loadChildren: () =>
          import('./project-management/project-management.module').then(
            (m) => m.ProjectManagementPageModule
          ),
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then(
            (m) => m.DashboardPageModule
          ),
      },
      {
        path: 'atendence',
        loadChildren: () =>
          import('./atendence/atendence.module').then(
            (m) => m.AtendencePageModule
          ),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./settings/settings.module').then(
            (m) => m.SettingsPageModule
          ),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./users/users.module').then((m) => m.UsersPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
