import { Component, OnInit, Input } from '@angular/core';
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
  @Input() item!: ResponseAPIGet;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.setCurrentTeam();
  }

  setCurrentTeam(): void {
    this.route.params.subscribe((params: Params) => {
      this.currentTeam = params.team;
    });
  }
}
