import { Injectable } from '@nestjs/common';
import { Match } from '../entities/match.entity';

@Injectable()
export class AppService {
    matches:Match[]= [];

  addReplay(){

  }

}
