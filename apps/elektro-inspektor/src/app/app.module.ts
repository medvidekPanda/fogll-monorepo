import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NbButtonModule, NbLayoutModule, NbSidebarModule, NbThemeModule } from '@nebular/theme';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NbButtonModule,
    NbLayoutModule,
    NbSidebarModule,
    NbThemeModule.forRoot({ name: 'default' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
