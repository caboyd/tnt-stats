import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';

import { Match } from './match.entity';
import { Player } from './player.entity';
import { FactionType } from './faction_type.entity';

@Entity('match_player', { schema: 'tntstats' })
@Index('fkIdx_394', ['factionType'])
@Index('fkIdx_378', ['match'])
@Index('fkIdx_440', ['player'])
export class MatchPlayer {

    @ManyToOne('Match', 'match_players', { primary: true, nullable: false })
    @JoinColumn({ name: 'match_id' })
    match: Match | null;

    @Column('integer', {
        nullable: false,
        primary: true,
        name: 'player_index'
    })
    player_index: number;

    @ManyToOne('Player', 'match_players', { nullable: false })
    @JoinColumn({ name: 'player_id' })
    player: Player | null;

    @ManyToOne(type => FactionType, { nullable: false })
    @JoinColumn({ name: 'faction_type_id' })
    faction_type: FactionType | null;

}
