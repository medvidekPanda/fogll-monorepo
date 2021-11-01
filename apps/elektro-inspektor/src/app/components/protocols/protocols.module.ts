import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared-module';
import { AddNewProtocolComponent } from './add-new-protocol/add-new-protocol.component';
import { NewProtocolRoutingModule } from './protocols-routing.module';
import { ProtocolsPageComponent } from './protocols.page';

@NgModule({
  declarations: [ProtocolsPageComponent, AddNewProtocolComponent],
  imports: [NewProtocolRoutingModule, SharedModule],
  providers: [AddNewProtocolComponent],
})
export class ProtocolsModule {}
