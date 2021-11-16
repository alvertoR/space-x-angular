import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardTeamComponent } from './components/card-team/card-team.component';
import { ViewHomeComponent } from './components/view-home/view-home.component';

import { HomeRoutingModule } from './home-routing.module'; 



@NgModule({
  declarations: [
    CardTeamComponent,
    ViewHomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
