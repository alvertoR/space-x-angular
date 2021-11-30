import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { TeamsServices } from 'src/app/core/services/teams/teams.service';
import { ResponseAPIGet, TeamCard } from '../../../typings'

@Component({
  selector: 'app-item-description',
  templateUrl: './item-description.component.html',
  styleUrls: ['./item-description.component.css']
})
export class ItemDescriptionComponent implements OnInit {

  public currentItem!: string;
  public currentIdTeam!: string;
  public itemInformation!: ResponseAPIGet;
  public team!: TeamCard;
  public isAnArray!: boolean;
  public noDescription: string = "it's doesn't have description :("

  constructor(
    private route: ActivatedRoute,
    private teamService: TeamsServices,
    private router: Router
  ) { }

  async ngOnInit(): Promise<void> {
    this.setCurrentTeam();
    await this.fetchItemById();
    if(this.itemInformation === undefined){
      this.router.navigate(['home']);
    }
    this.isAnArray = this.itemInformation?.flickr_images ? true : false;
  }

  setCurrentTeam(): void {
    this.route.params.subscribe((params: Params) => {
      this.currentItem = params.team;
      this.currentIdTeam = params.id
      this.team = this.teamService.getTeamByName(params.team);
    });
  }

  async fetchItemById(): Promise<void> {
    this.itemInformation = await this.teamService.getItemTeamDescriptionById(this.currentIdTeam, this.currentItem);
  }
}
