import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Alias } from './alias.entity';
import { Match } from './match.entity';


@Entity('matchboard_result', { schema: 'tntstats' })
@Index('fkIdx_444', ['player1Alias'])
@Index('fkIdx_447', ['player2Alias'])
export class MatchboardResult {

    @PrimaryGeneratedColumn({
        type: 'integer',
        name: 'id'
    })
    id: number;

    @ManyToOne(type => Alias, { nullable: false })
    @JoinColumn({ name: 'player1_alias_id' })
    player1_alias: Alias | null;

    @ManyToOne(type => Alias, { nullable: false })
    @JoinColumn({ name: 'player2_alias_id' })
    player2_alias: Alias | null;

    @Column('integer', {
        nullable: false,
        name: 'player1_score'
    })
    player1_score: number;

    @Column('integer', {
        nullable: false,
        name: 'player2_score'
    })
    player2_score: number;

    @Column('integer', {
        nullable: false,
        name: 'winning_team'
    })
    winning_team: number;

    @Column('date', {
        nullable: false,
        name: 'match_date'
    })
    match_date: string;

    @Column('integer', {
        nullable: false,
        name: 'match_seconds'
    })
    match_seconds: number;


    @OneToMany('Match', 'matchboard_result')
    matches: Match[];

}
