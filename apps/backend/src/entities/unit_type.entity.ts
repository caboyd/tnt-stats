import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PlayerUnitStats } from './player_unit_stats.entity';
import { MatchCard } from './match_card.entity';


@Entity('unit_type', { schema: 'tntstats' })
export class UnitType {

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


    @Column('integer', {
        nullable: true,
        name: 'cost'
    })
    cost: number | null;


    @Column('integer', {
        nullable: true,
        name: 'build_time_second'
    })
    build_time_second: number | null;


    @Column('text', {
        nullable: true,
        name: 'description'
    })
    description: string | null;


    @Column('integer', {
        nullable: true,
        name: 'damage'
    })
    damage: number | null;


    @Column('integer', {
        nullable: true,
        name: 'range'
    })
    range: number | null;


    @OneToMany('MatchCard', 'unitType')
    match_cards: MatchCard[];


    @OneToMany('PlayerUnitStats', 'unit_type')
    player_unit_stats: PlayerUnitStats[];

}
