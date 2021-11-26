import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TeamCard, ResponseAPIGet } from 'src/app/typings';

@Injectable({
    providedIn: 'root'
})
export class TeamsServices {
    private BASE_URL: string = 'https://api.spacexdata.com/v4';
    private teams: TeamCard[] = [
        {
          name:'dragons',
          urlImage: '../../../../assets/icons/dragon.svg',
          description:'dragon icon'
        },
        {
          name:'ships',
          urlImage: '../../../../assets/icons/ship.svg',
          description:'ship icon'
        },
        {
          name:'rockets',
          urlImage:'../../../../assets/icons/rocket.svg',
          description:'rocket icon'
        }
    ];

    constructor(
      private http: HttpClient
    ) { }

    getTeams(): TeamCard[] {
        return this.teams;
    }

    getTeamByName(teamName: string): TeamCard {
      return this.teams.find(team => team.name === teamName) as TeamCard;
    }

    async fetchTeamByName(teamName: string): Promise<ResponseAPIGet[]> {
      try{
        const request = await this.http.get<ResponseAPIGet[]>(`${this.BASE_URL}/${teamName}`).toPromise();
        return request;
      }catch(error: any){
        return error;
      }
    }

    async getItemTeamDescriptionById(idItem: string, teamName: string): Promise<ResponseAPIGet> {
      const response =  await this.fetchTeamByName(teamName);
      return response.find(item => item.id === idItem) as ResponseAPIGet;
    }
 }