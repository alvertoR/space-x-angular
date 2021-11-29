import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemDescriptionComponent } from './components/item-description/item-description.component';
import { TeamGaleryComponent } from './components/team-galery/team-galery.component';
const routes: Routes = [
    {
        path: ':team',
        component: TeamGaleryComponent
    },
    {
        path: ':team/:id',
        component: ItemDescriptionComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamSelectedRoutingModule { }