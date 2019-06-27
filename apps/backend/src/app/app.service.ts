import { Injectable } from '@nestjs/common';
import {Match} from "@tnt-stats/data";

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
