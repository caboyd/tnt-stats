import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Match } from './match.entity';

@Entity('match_type', { schema: 'tntstats' })
export class MatchType {

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

    @OneToMany('Match', 'match_type')
    matches: Match[];

}
