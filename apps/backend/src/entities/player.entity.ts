import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PlatformType } from './platform_type.entity';
import { Alias } from './alias.entity';
import { MatchPlayer } from './match_player.entity';
import { PlayerUnitStats } from './player_unit_stats.entity';


@Entity('player', { schema: 'tntstats' })
@Index('fkIdx_436', ['platformType'])
export class Player {

    @PrimaryGeneratedColumn({
        type: 'integer',
        name: 'id'
    })
    id: number;


    @Column('text', {
        nullable: false,
        name: 'common_name'
    })
    common_name: string;


    @Column('boolean', {
        nullable: false,
        name: 'common_name_lock'
    })
    common_name_lock: boolean;


    @Column('bigint', {
        nullable: false,
        name: 'tnt_id'
    })
    tnt_id: string;


    @ManyToOne('PlatformType', 'players', {})
    @JoinColumn({ name: 'platform_type_id' })
    platform_type: PlatformType | null;


    @Column('text', {
        nullable: true,
        name: 'platform_id'
    })
    platform_id: string | null;


    @OneToMany('Alias', 'player')
    aliases: Alias[];


    @OneToMany('MatchPlayer', 'player')
    match_players: MatchPlayer[];

    @OneToMany('PlayerUnitStats', 'player')
    player_unit_stats: PlayerUnitStats[];


}
