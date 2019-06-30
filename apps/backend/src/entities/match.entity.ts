import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';


import { ReplayEvent } from './replay_event.entity';
import { MatchPlayer } from './match_player.entity';
import { MatchCard } from './match_card.entity';
import { MatchDetails } from './match_details.entity';
import { MatchType } from './match_type.entity';
import { TeamConfigType } from './team_config_type.entity';
import { MatchboardResult } from './matchboard_result.entity';
import { GameVersionType } from './game_version_type.entity';


@Entity('match', { schema: 'tntstats' })
@Index('fkIdx_345', ['gameVersionType'])
@Index('fkIdx_281', ['matchType'])
@Index('fkIdx_335', ['matchboardResult'])
@Index('fkIdx_362', ['teamConfigType'])
export class Match {

    @PrimaryGeneratedColumn({
        type: 'integer',
        name: 'id'
    })
    id: number;


    @Column('bytea', {
        nullable: false,
        name: 'history_sha1'
    })
    history_sha1: Buffer;


    @Column('integer', {
        nullable: false,
        name: 'winning_team'
    })
    winning_team: number;


    @Column('date', {
        nullable: false,
        name: 'replay_date'
    })
    replay_date: string;


    @Column('date', {
        nullable: false,
        name: 'created_at'
    })
    created_at: string;


    @Column('boolean', {
        nullable: false,
        name: 'deleted'
    })
    deleted: boolean;


    @Column('date', {
        nullable: true,
        name: 'deleted_date'
    })
    deleted_date: string | null;


    @Column('integer', {
        nullable: true,
        name: 'match_seconds'
    })
    match_seconds: number | null;


    @ManyToOne('MatchType', 'matches', { nullable: false })
    @JoinColumn({ name: 'match_type_id' })
    match_type: MatchType | null;


    @ManyToOne('TeamConfigType', 'matches', { nullable: false })
    @JoinColumn({ name: 'team_config_type_id' })
    team_config_type: TeamConfigType | null;


    @ManyToOne('MatchboardResult', 'matches', {})
    @JoinColumn({ name: 'matchboard_result_id' })
    matchboard_result: MatchboardResult | null;


    @ManyToOne('GameVersionType', 'matches', { nullable: false })
    @JoinColumn({ name: 'game_version_type_id' })
    game_version_type: GameVersionType | null;


    @Column('integer', {
        nullable: false,
        name: 'deck_size'
    })
    deck_size: number;

    @OneToMany('MatchCard', 'match')
    match_cards: MatchCard[];

    @OneToOne('MatchDetails', 'match')
    match_details: MatchDetails | null;

    @OneToMany('MatchPlayer', 'match')
    match_players: MatchPlayer[];

    @OneToMany('ReplayEvent', 'match')
    replay_events: ReplayEvent[];

}
