import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsServices } from './services/teams/teams.service';

@NgModule({
    declarations: [],
    imports: [
      CommonModule
    ],
    providers: [
      TeamsServices
    ]
  })
  export class CoreModule { }