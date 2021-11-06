import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FogllFormsModule } from '@fogll-monorepo/fogll-forms';
import { SharedModule } from '../../shared/shared-module';
import { CreateProtocolTemplateComponent } from './create-protocol-template/create-protocol-template.component';
import { NewProtocolRoutingModule } from './protocols-routing.module';
import { ProtocolsPageComponent } from './protocols.page';
import { ShowProtocolComponent } from './show-protocol/show-protocol.component';

@NgModule({
  declarations: [
    ProtocolsPageComponent,
    ShowProtocolComponent,
    CreateProtocolTemplateComponent,
  ],
  imports: [NewProtocolRoutingModule, SharedModule, HttpClientModule, FogllFormsModule],
  providers: [ShowProtocolComponent],
})
export class ProtocolsModule {}
