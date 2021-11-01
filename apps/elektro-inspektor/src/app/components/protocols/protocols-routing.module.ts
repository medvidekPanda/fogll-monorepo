import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProtocolTemplateComponent } from './create-protocol-template/create-protocol-template.component';
import { ShowProtocolComponent } from './show-protocol/show-protocol.component';

const routes: Routes = [
  {
    path: '',
    component: ShowProtocolComponent,
    children: [],
  },
  {
    path: 'create',
    component: CreateProtocolTemplateComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewProtocolRoutingModule {}
