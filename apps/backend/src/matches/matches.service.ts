import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Match } from '../entities/match.entity';

@Injectable()
export class MatchesService {
    constructor(
        @InjectRepository(Match)
        private readonly matchRepository: Repository<Match>
    ) {
    }

    findAll(): Promise<Match[]> {
        return this.matchRepository.find();
    }

    /**
     * Parses replay XML string to insert data into all tables
     * @param replay_data_xml
     * @returns the id of the match after insert
     */
    insertFromReplay( replay_data_xml: string): number{


        return 0;
    }

    find(id: number): Promise<Match> {
        return this.matchRepository.findOne(id);
    }
}
