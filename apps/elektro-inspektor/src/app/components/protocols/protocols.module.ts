import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FogllFormsModule } from '@fogll-monorepo/fogll-forms';
import { NbCardModule, NbDialogModule } from '@nebular/theme';
import { SharedModule } from '../../shared/shared-module';
import { CreateProtocolTemplateComponent } from './create-protocol-template/create-protocol-template.component';
import { NewProtocolRoutingModule } from './protocols-routing.module';
import { ProtocolsPageComponent } from './protocols.page';
import { SelectItemsComponent } from './select-items/select-items.component';
import { ShowProtocolComponent } from './show-protocol/show-protocol.component';

@NgModule({
  declarations: [
    CreateProtocolTemplateComponent,
    ProtocolsPageComponent,
    ShowProtocolComponent,
    SelectItemsComponent,
  ],
  imports: [
    CommonModule,
    NewProtocolRoutingModule,
    SharedModule,
    HttpClientModule,
    FogllFormsModule,
    NbDialogModule.forChild(),
    NbCardModule
  ],
})
export class ProtocolsModule { }
