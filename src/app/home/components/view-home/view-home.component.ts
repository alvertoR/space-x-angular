import { Component, OnInit } from '@angular/core';
import { TeamCard } from 'src/app/typings';
import { TeamsServices } from 'src/app/core/services/teams/teams.service';

@Component({
  selector: 'app-view-home',
  templateUrl: './view-home.component.html',
  styleUrls: ['./view-home.component.css']
})
export class ViewHomeComponent implements OnInit {

  public teams!: TeamCard[];

  constructor(
    private teamsServices: TeamsServices
  ) { }

  ngOnInit(): void {
    this.teams = this.teamsServices.getTeams();
  }

}
