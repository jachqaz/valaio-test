import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

export class Paths {
  static readonly home = 'home';
}

export const routes: Routes = [
  {
    path: '',
    redirectTo: Paths.home.toString(),
    pathMatch: 'full',
  },
  {
    path: Paths.home.toString(),
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
