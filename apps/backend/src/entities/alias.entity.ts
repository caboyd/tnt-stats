import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Player } from './player.entity';
import { MatchboardResult } from './matchboard_result.entity';

@Entity('alias', { schema: 'tntstats' })
@Index('fkIdx_349', ['player'])
export class Alias {
    @PrimaryGeneratedColumn({
        type: 'integer',
        name: 'id'
    })
    id: number;

    @Column('text', {
        nullable: false,
        name: 'name'
    })
    name: string;

    @ManyToOne('Player', 'aliases', {})
    @JoinColumn({ name: 'player_id' })
    player: Player | null;

    @OneToMany(
        'MatchboardResult',
        'player1_alias'
    )
    matchboard_results: Promise<MatchboardResult[]>;

    @OneToMany(
        'MatchboardResult',
        'player2_alias'
    )
    matchboard_results2: Promise<MatchboardResult[]>;
}
