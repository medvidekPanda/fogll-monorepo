import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewProtocolComponent } from './add-new-protocol/add-new-protocol.component';

const routes: Routes = [
  {
    path: '',
    component: AddNewProtocolComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewProtocolRoutingModule {}
