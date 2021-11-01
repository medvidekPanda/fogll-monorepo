import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AtendenceListComponent } from './atendence-list/atendence-list.component';


const routes: Routes = [
  {
    path: '',
    component: AtendenceListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtendencePageRoutingModule {}
