import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MatchesModule } from '../matches/matches.module';
import { PlayersModule } from '../players/players.module';

@Module({
  imports: [TypeOrmModule.forRoot(), MatchesModule, PlayersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
