import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamGaleryComponent } from './components/team-galery/team-galery.component';
import { ItemDescriptionComponent } from './components/item-description/item-description.component';
import { TeamSelectedRoutingModule } from './team-selected-routing.module';
import { ItemsComponent } from './components/items/items.component';


@NgModule({
  declarations: [
    TeamGaleryComponent,
    ItemDescriptionComponent,
    ItemsComponent
  ],
  imports: [
    CommonModule,
    TeamSelectedRoutingModule
  ]
})
export class TeamSelectedModule { }
