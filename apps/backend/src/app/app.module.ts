import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MatchesModule } from '../matches/matches.module';

@Module({
  imports: [TypeOrmModule.forRoot(), MatchesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
