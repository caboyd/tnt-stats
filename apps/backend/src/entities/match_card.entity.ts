import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';

import { Match } from './match.entity';
import { UnitType } from './unit_type.entity';


@Entity('match_card', { schema: 'tntstats' })
@Index('fkIdx_365', ['match'])
@Index('fkIdx_245', ['unitType'])
export class MatchCard {

    @ManyToOne('Match', 'match_cards', { primary: true, nullable: false })
    @JoinColumn({ name: 'match_id' })
    match: Match | null;

    @ManyToOne('UnitType', 'match_cards', { primary: true, nullable: false })
    @JoinColumn({ name: 'unit_type_id' })
    unitType: UnitType | null;


    @Column('integer', {
        nullable: false,
        primary: true,
        name: 'player_index'
    })
    player_index: number;

}
