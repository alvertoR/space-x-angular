import { 
  Component, 
  OnInit,
  Input
 } from '@angular/core';
import { TeamCard } from 'src/app/typings';

@Component({
  selector: 'app-card-team',
  templateUrl: './card-team.component.html',
  styleUrls: ['./card-team.component.css']
})
export class CardTeamComponent implements OnInit {

  @Input() team!: TeamCard;

  constructor() { }

  ngOnInit(): void {
  }

}
