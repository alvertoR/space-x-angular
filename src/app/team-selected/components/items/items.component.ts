import { Component, OnInit } from '@angular/core';
import { TeamsServices } from 'src/app/core/services/teams/teams.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ResponseAPIGet } from 'src/app/typings';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  public currentTeam!: string;
  public teamItems!: ResponseAPIGet[];

  constructor(
    private teamService: TeamsServices,
    private route: ActivatedRoute
  ) { }

  async ngOnInit(): Promise<void> {
    //TODO validar si el team existe y en caso que no exista redireccionar a los teams.
    this.setCurrentTeam();
    await this.getTeamByName();
  }

  async getTeamByName(): Promise<void> {
    const response = await this.teamService.fetchTeamByName(this.currentTeam);
    this.teamItems = response;
  }

  setCurrentTeam(): void {
    this.route.params.subscribe((params: Params) => {
      this.currentTeam = params.team;
    });
  }
}
