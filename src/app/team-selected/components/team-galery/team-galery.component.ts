import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { TeamCard } from 'src/app/typings';
import { TeamsServices } from 'src/app/core/services/teams/teams.service';
import { ResponseAPIGet } from 'src/app/typings';

@Component({
  selector: 'app-team-galery',
  templateUrl: './team-galery.component.html',
  styleUrls: ['./team-galery.component.css']
})
export class TeamGaleryComponent implements OnInit {

  public team!: TeamCard;
  public teamItems!: ResponseAPIGet[];

  constructor(
    private teamsServices: TeamsServices,
    private route: ActivatedRoute,
    private router: Router
  ) { 
  }

  async ngOnInit(): Promise<void> {
    this.setCurrentTeam();
    if(this.team === undefined){
      this.router.navigate(['home']);
    }
    await this.getTeamByName();
  }

  setCurrentTeam(): void {
    this.route.params.subscribe((params: Params) => {
      this.team = this.teamsServices.getTeamByName(params.team);
    });
  }

  async getTeamByName(): Promise<void> {
    const response = await this.teamsServices.fetchTeamByName(this.team.name);
    this.teamItems = response;
  }

}
