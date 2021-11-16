import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProtocolTemplateComponent } from './create-protocol-template/create-protocol-template.component';
import { ShowProtocolComponent } from './show-protocol/show-protocol.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'show',
    pathMatch: 'full'
  },
  {
    path: 'show',
    component: ShowProtocolComponent,
    pathMatch: 'full'
  },
  {
    path: 'create',
    component: CreateProtocolTemplateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewProtocolRoutingModule { }
