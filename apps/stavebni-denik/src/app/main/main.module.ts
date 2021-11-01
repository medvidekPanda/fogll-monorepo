import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from '../shared/header/header.component';
import { MenuComponent } from '../shared/menu/menu.component';
import { DatabaseConfig } from '../shared/service/database-config.service';
import { AppProjectsResolver } from '../shared/service/app-project-resolver';
import { ProjectsService } from '../shared/service/projects.service';
import { SharedModule } from '../shared/shared.module';
import { MainRoutingModule } from './main-routing.module';
import { MainPage } from './main.page';

@NgModule({
  providers: [DatabaseConfig, AppProjectsResolver, ProjectsService],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainRoutingModule,
    SharedModule,
  ],
  declarations: [MainPage, HeaderComponent, MenuComponent],
  exports: [],
})
export class MainPageModule {}
