import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NbMenuModule, NbSidebarModule } from '@nebular/theme';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProtocolsModule } from './components/protocols/protocols.module';
import { SharedModule } from './shared/shared-module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProtocolsModule,
    SharedModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
