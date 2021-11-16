import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'protocols',
    pathMatch: 'full',
  },
  {
    path: 'login-page',
    component: AppComponent,
  },
  {
    path: 'protocols',
    loadChildren: () =>
      import('./components/protocols/protocols.module').then(
        (m) => m.ProtocolsModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
