import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';

import { Player } from './player.entity';
import { UnitType } from './unit_type.entity';


@Entity('player_unit_stats', { schema: 'tntstats' })
@Index('fkIdx_450', ['player'])
@Index('fkIdx_263', ['unitType'])
export class PlayerUnitStats {


    @ManyToOne('Player', 'player_unit_stats', { primary: true, nullable: false })
    @JoinColumn({ name: 'player_id' })
    player: Player | null;


    @ManyToOne('UnitType', 'player_unit_stats', { primary: true, nullable: false })
    @JoinColumn({ name: 'unit_type_id' })
    unit_type: UnitType | null;


    @Column('integer', {
        nullable: false,
        name: 'matches'
    })
    matches: number;


    @Column('integer', {
        nullable: false,
        name: 'matches_won'
    })
    matches_won: number;

}
