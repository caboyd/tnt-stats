import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Match } from './match.entity';

@Entity('game_version_type', { schema: 'tntstats' })
export class GameVersionType {

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

    @OneToMany('Match', 'game_version_type')
    matches: Promise<Match[]>;

}
