import { Injectable } from '@nestjs/common';

export type Match = {player1:string, player2:string};

@Injectable()
export class AppService {

  matches: Match[] = [
    {player1:'Pile', player2:'Mishi'},
    {player1:'Pile', player2:'pillow_8'},
  ];

  addReplay(){
    this.matches.push({
      player1: `Random ${Math.random()}`,
      player2: `Random ${Math.random()}`,
    })
  }

}
