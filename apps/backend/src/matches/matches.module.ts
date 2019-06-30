import { Module } from '@nestjs/common';
import { MatchesService } from './matches.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MatchesController } from './matches.controller';
import { Match } from '../entities/match.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Match])],
    providers: [MatchesService],
    controllers: [MatchesController]
})
export class MatchesModule {
}
