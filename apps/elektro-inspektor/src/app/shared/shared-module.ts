import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
  NbButtonModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbSelectModule,
  NbSidebarModule,
  NbThemeModule
} from '@nebular/theme';


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    NbButtonModule,
    NbEvaIconsModule,
    NbIconModule,
    NbLayoutModule,
    NbSidebarModule,
    NbInputModule,
    NbSelectModule,
    NbThemeModule.forRoot({ name: 'default' }),
  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    NbButtonModule,
    NbLayoutModule,
    NbSidebarModule,
    NbThemeModule,
    NbSelectModule,
    NbEvaIconsModule,
    NbIconModule,
    NbInputModule,
  ],
})
export class SharedModule {}
