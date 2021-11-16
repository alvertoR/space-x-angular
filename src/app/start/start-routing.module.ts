import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponentComponent } from './components/start-component/start-component.component';

const routes: Routes = [
  {
    path: '',
    component: StartComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StartRoutingModule { }
