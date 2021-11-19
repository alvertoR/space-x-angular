import { Component, OnInit } from '@angular/core';
import { TeamCard } from 'src/app/typings';

@Component({
  selector: 'app-view-home',
  templateUrl: './view-home.component.html',
  styleUrls: ['./view-home.component.css']
})
export class ViewHomeComponent implements OnInit {

  public teams: TeamCard[] = [
    {
      name:'Dragons',
      urlImage: '../../../../assets/icons/dragon.svg',
      description:'dragon icon'
    },
    {
      name:'Ships',
      urlImage: '../../../../assets/icons/ship.svg',
      description:'ship icon'
    },
    {
      name:'Rockets',
      urlImage:'../../../../assets/icons/rocket.svg',
      description:'rocket icon'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
