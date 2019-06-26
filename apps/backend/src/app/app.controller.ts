import {Controller, Get, Post} from '@nestjs/common';

import {AppService} from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get('matches')
  getData() {
    return this.appService.matches;
  }

  @Post('add')
  add(){
    return this.appService.addReplay();
  }
}
