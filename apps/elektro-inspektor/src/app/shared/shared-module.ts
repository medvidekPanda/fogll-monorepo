import { NgModule } from '@angular/core';
import {
  NbButtonModule,
  NbLayoutModule,
  NbSidebarModule,
  NbThemeModule
} from '@nebular/theme';

@NgModule({
  imports: [
    NbButtonModule,
    NbLayoutModule,
    NbSidebarModule,
    NbThemeModule.forRoot({ name: 'default' }),
  ],
  exports: [
    NbButtonModule,
    NbLayoutModule,
    NbSidebarModule,
    NbThemeModule,
  ],
})
export class SharedModule {}
