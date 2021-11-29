import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./start/start.module').then(module => module.StartModule)
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(module => module.HomeModule)
      },
      {
        path: 'team',
        loadChildren: () => import('./team-selected/team-selected.module').then(module => module.TeamSelectedModule)
      }
    ]
  },
  {
    path: '**',
    loadChildren: () => import('./not-found/not-found.module').then(module => module.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
