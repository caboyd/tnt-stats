import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { MatchPlayer } from './match_player.entity';

@Entity('faction_type', { schema: 'tntstats' })
export class FactionType {

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

    @OneToMany('MatchPlayer', 'faction_type')
    matchPlayers: Promise<MatchPlayer[]>;

}
