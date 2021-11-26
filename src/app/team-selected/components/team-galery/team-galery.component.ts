import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { TeamCard } from 'src/app/typings';
import { TeamsServices } from 'src/app/core/services/teams/teams.service';

@Component({
  selector: 'app-team-galery',
  templateUrl: './team-galery.component.html',
  styleUrls: ['./team-galery.component.css']
})
export class TeamGaleryComponent implements OnInit {

  public team!: TeamCard;
  constructor(
    private teamsServices: TeamsServices,
    private route: ActivatedRoute
  ) { 
  }

  ngOnInit(): void {
    this.setCurrentTeam();
  }

  setCurrentTeam(): void {
    this.route.params.subscribe((params: Params) => {
      this.team = this.teamsServices.getTeamByName(params.team);
    });
  }

}
