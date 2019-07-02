import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Match } from '../entities/match.entity';
import { Replay } from '@tnt-stats/data';
import { validateSync } from 'class-validator';
import { plainToClass } from 'class-transformer';

const parser = require('fast-xml-parser');

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
    insertFromReplay(replay_data_xml: string): number {


        return 0;
    }

    find(id: number): Promise<Match> {
        return this.matchRepository.findOne(id);
    }


    XMLToReplay(replay_data_xml: string): Replay | null {
        let result = null;
        const options = {
            attributeNamePrefix: 'a_',
            ignoreAttributes: false,
            parseAttributeValue: true
        };

        if (parser.validate(replay_data_xml) === true) {
            result = parser.parse(replay_data_xml, options);
            result = plainToClass(Replay, result);
        }

        return result;
    }

    validateReplay(replay: Replay): boolean {
        const err = validateSync(replay);
        return err.length === 0;
    }

}
